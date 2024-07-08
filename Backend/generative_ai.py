import google.generativeai as genai
from sqlalchemy.orm import Session
import models
from typing import List, Tuple, Dict, Any
import schemas
from models import MCQResult

# Configure the Google Generative AI API key
GOOGLE_API_KEY = "AIzaSyCyq0jbEgSC9C-TykrFFVUK5_wQVhpjnS8"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def EvaluateMCQ(data: schemas.MCQData, db: Session) -> Tuple[int, Dict[str, Any]]:
    score = 0
    neg = -1
    pos = 2
    responses = {"Q_id": [], "score": []}
    
    for i in range(len(data.Q_id)):
        question_id = data.Q_id[i]
        student_answer = data.Student_answer[i]
        correct_answer = data.correct_answer[i]
        
        if student_answer is None:
            question_score = 0
        elif student_answer == correct_answer:
            question_score = pos
            score += pos
        else:
            question_score = neg
            score += neg
        
        responses["Q_id"].append(question_id)
        responses["score"].append(question_score)
        
        db_mcq_result = MCQResult(
            question_id=question_id,
            student_answer=student_answer,
            correct_answer=correct_answer,
            score=question_score
        )
        db.add(db_mcq_result)
    
    db.commit()  # Commit after the loop
    return score, responses


def EvaluateDescriptive(data: List[schemas.DescriptiveData], db: Session):
    Marks = 0
    Responses = {"Q_id": [], "score": []}
    for item in data:
        question = item.question
        answer = item.Student_answer
        marks = str(item.marks)
        response = model.generate_content(f"question: {question} student answer: {answer} evaluate this answer for the above question with student answer and give me marks out of {marks} in numerical format. give me only marks. don't give anything except marks")
        Responses["Q_id"].append(item.question_id)
        Responses["score"].append(response.text)
        Marks += int(response.text)

        db_descriptive_result = models.DescriptiveResult(
            question_id=item.question_id,
            student_answer=item.Student_answer,
            marks=int(response.text),
            student_id=item.student_id
        )
        db.add(db_descriptive_result)
        db.commit()
        db.refresh(db_descriptive_result)

    return Marks, Responses

def get_job_recommendations(courses):
    response = model.generate_content(f"Provide 5 job recommendations for the following courses: {', '.join(courses)}")
    recommendations = list(response.text.split('\n'))
    return recommendations

def get_course_recommendations(courses):
    response = model.generate_content(f"Provide 5 relevant course recommendations for the following courses: {', '.join(courses)}")
    recommendations = list(response.text.split('\n'))
    return recommendations
