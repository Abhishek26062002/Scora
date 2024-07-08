import google.generativeai as genai
from sqlalchemy.orm import Session
from schemas import DescriptiveData
import models

GOOGLE_API_KEY = "AIzaSyCyq0jbEgSC9C-TykrFFVUK5_wQVhpjnS8"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def EvaluateMCQ(data, db: Session):
    score = 0
    neg = -1
    pos = 2
    responses = {"Q_id": [], "score": []}
    for i in range(len(data["Q_id"])):
        if data["Student_answer"][i] is None:
            responses["Q_id"].append(data["Q_id"][i])
            responses["score"].append(0)
            db_mcq_result = models.MCQResult(
                question_id=data["Q_id"][i],
                student_answer=data["Student_answer"][i],
                correct_answer=data["correct_answer"][i],
                score=0
            )
        elif data["Student_answer"][i] == data["correct_answer"][i]:
            responses["Q_id"].append(data["Q_id"][i])
            responses["score"].append(pos)
            score += pos
            db_mcq_result = models.MCQResult(
                question_id=data["Q_id"][i],
                student_answer=data["Student_answer"][i],
                correct_answer=data["correct_answer"][i],
                score=pos
            )
        else:
            responses["Q_id"].append(data["Q_id"][i])
            responses["score"].append(neg)
            score += neg
            db_mcq_result = models.MCQResult(
                question_id=data["Q_id"][i],
                student_answer=data["Student_answer"][i],
                correct_answer=data["correct_answer"][i],
                score=neg
            )
        db.add(db_mcq_result)
        db.commit()
        db.refresh(db_mcq_result)
    return score, responses

def EvaluateDescriptive(data: DescriptiveData, db: Session):
    response = model.generate_content(
        f"question: {data.question} student answer: {data.Student_answer} evaluate this answer for the above question with student answer and give me marks out of {data.marks} in numerical format. give me only marks. don't give anything except marks"
    )
    
    score = int(response.text)
    
    db_descriptive_result = models.DescriptiveResult(
        q_id=data.Q_id,
        question=data.question,
        student_answer=data.Student_answer,
        marks=score,
        student_id=data.student_id
    )
    
    db.add(db_descriptive_result)
    db.commit()
    db.refresh(db_descriptive_result)
    
    return score


def get_job_recommendations(courses):
    response = model.generate_content(f"Provide 5 job recommendations for the following courses: {', '.join(courses)}")
    recommendations = list(response.text.split('\n'))
    return recommendations

def get_course_recommendations(courses):
    response = model.generate_content(f"Provide 5 relevant courses recommendations for: {', '.join(courses)}")
    recommendations = list(response.text.split('\n'))
    return recommendations
