import models
from database import SessionLocal

def get_mcq_results(db: SessionLocal, student_id: int):
    return db.query(models.MCQResult).filter(models.MCQResult.student_id == student_id).all()

def get_descriptive_results(db: SessionLocal, student_id: int):
    return db.query(models.DescriptiveResult).filter(models.DescriptiveResult.student_id == student_id).all()
