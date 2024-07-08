from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal, engine
import models, schemas
from generative_ai import EvaluateMCQ, EvaluateDescriptive, get_job_recommendations, get_course_recommendations
from graphs import generate_and_save_graphs

# Create all database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust as per your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoint to evaluate MCQ data
@app.post("/mcq/", response_model=schemas.MCQResponse)
def evaluate_mcq(mcq_data: schemas.MCQData, db: Session = Depends(get_db)):
    try:
        score, responses = EvaluateMCQ(mcq_data, db)
        return {"score": score, "responses": responses}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to evaluate descriptive data
@app.post("/descriptive/", response_model=schemas.DescriptiveResponse)
def evaluate_descriptive(descriptive_data: schemas.DescriptiveData, db: Session = Depends(get_db)):
    try:
        score, responses = EvaluateDescriptive(descriptive_data, db)
        return {"score": score, "responses": responses}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to get job recommendations based on courses
@app.post("/recommendations/jobs/", response_model=schemas.Courses)
def job_recommendations(courses: schemas.Courses):
    try:
        recommendations = get_job_recommendations(courses.courses)
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to get course recommendations based on courses
@app.post("/recommendations/courses/", response_model=schemas.Courses)
def course_recommendations(courses: schemas.Courses):
    try:
        recommendations = get_course_recommendations(courses.courses)
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to get test performance graphs for a student
@app.get("/students/{student_id}/test_performance_graphs/")
def get_test_performance_graphs(student_id: int, output_folder: str, db: Session = Depends(get_db)):
    try:
        performance = db.query(models.StudentPerformance).filter(models.StudentPerformance.student_id == student_id).first()
        
        if not performance:
            raise HTTPException(status_code=404, detail="Student performance data not found")

        correct = len([result for result in performance.mcq_results if result.score > 0])
        incorrect = len(performance.mcq_results) - correct
        score = sum(result.score for result in performance.mcq_results)

        images = generate_and_save_graphs(correct, incorrect, score, output_folder)
        return {"images": images}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
