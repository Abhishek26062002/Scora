from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from database import Base
from pydantic import BaseModel


class MCQResult(Base):
    __tablename__ = 'mcq_results'

    id = Column(Integer, primary_key=True)
    question_id = Column(Integer, ForeignKey('questions.id')) 
    student_answer = Column(String)
    correct_answer = Column(String)
    score = Column(Integer)
    student_id = Column(Integer, ForeignKey('students.id'))  # Ensure this column exists in your database schema

    question = relationship('Question')
    student = relationship('Student')  # Example relationship to the Student model, adjust as per your schema

# Add the relationship back to Student if necessary
MCQResult.student = relationship("Student", back_populates="mcq_results")

class DescriptiveResult(Base):
    __tablename__ = 'descriptive_results'

    id = Column(Integer, primary_key=True, index=True)
    question_id = Column(Integer, ForeignKey('questions.id'))  # Updated from q_id to question_id
    student_answer = Column(String)
    marks = Column(Integer)
    student_id = Column(Integer, ForeignKey('students.id'))

    student = relationship('Student', back_populates='descriptive_results')

class StudentPerformance(Base):
    __tablename__ = 'student_performance'

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey('students.id'))
    correct_answers = Column(Integer)
    incorrect_answers = Column(Integer)
    score = Column(Float)

    student = relationship('Student', back_populates='performance')

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    mcq_results = relationship('MCQResult', back_populates='student')
    descriptive_results = relationship('DescriptiveResult', back_populates='student')
    performance = relationship('StudentPerformance', back_populates='student', uselist=False)

class Question(Base):
    __tablename__ = 'questions'

    id = Column(Integer, primary_key=True)
    question_text = Column(String)
    options = relationship('Option', back_populates='question')
    results = relationship('MCQResult', back_populates='question')

class Option(Base):
    __tablename__ = 'options'

    id = Column(Integer, primary_key=True)
    option_text = Column(String)
    question_id = Column(Integer, ForeignKey('questions.id'))

    question = relationship('Question', back_populates='options')
