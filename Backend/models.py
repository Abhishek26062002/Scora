from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from pydantic import BaseModel
from database import Base
from typing import List

class MCQResult(Base):
    __tablename__ = 'mcq_results'

    id = Column(Integer, primary_key=True, index=True)
    question_id = Column(Integer, index=True)
    student_answer = Column(String)
    correct_answer = Column(String)
    score = Column(Float)
    student_performance_id = Column(Integer, ForeignKey('student_performances.id'))

class DescriptiveResult(Base):
    __tablename__ = 'descriptive_results'

    id = Column(Integer, primary_key=True, index=True)
    q_id = Column(Integer, index=True)
    question = Column(String)
    student_answer = Column(String)
    marks = Column(Float)
    student_id = Column(Integer)
    student_performance_id = Column(Integer, ForeignKey('student_performances.id'))

class StudentPerformance(Base):
    __tablename__ = 'student_performances'

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, index=True)
    student_name = Column(String)
    mcq_results = relationship('MCQResult', back_populates='student_performance')
    descriptive_results = relationship('DescriptiveResult', back_populates='student_performance')

MCQResult.student_performance = relationship('StudentPerformance', back_populates='mcq_results')
DescriptiveResult.student_performance = relationship('StudentPerformance', back_populates='descriptive_results')
