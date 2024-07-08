from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from database import Base

class MCQResult(Base):
    __tablename__ = 'mcq_results'

    id = Column(Integer, primary_key=True)
    question_id = Column(Integer, ForeignKey('questions.id'))
    student_answer = Column(String)
    correct_answer = Column(String)
    score = Column(Integer)
    student_id = Column(Integer, ForeignKey('students.id'))

    # Relationships
    question = relationship('Question', back_populates='results')
    student = relationship('Student', back_populates='mcq_results')

class DescriptiveResult(Base):
    __tablename__ = 'descriptive_results'

    id = Column(Integer, primary_key=True)
    question_id = Column(Integer, ForeignKey('questions.id'))
    student_answer = Column(String)
    marks = Column(Integer)
    student_id = Column(Integer, ForeignKey('students.id'))

    # Relationships
    question = relationship('Question')
    student = relationship('Student', back_populates='descriptive_results')

class StudentPerformance(Base):
    __tablename__ = 'student_performance'

    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('students.id'))
    correct_answers = Column(Integer)
    incorrect_answers = Column(Integer)
    score = Column(Float)

    # Relationships
    student = relationship('Student', back_populates='performance')

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    # Relationships
    mcq_results = relationship('MCQResult', back_populates='student')
    descriptive_results = relationship('DescriptiveResult', back_populates='student')
    performance = relationship('StudentPerformance', back_populates='student', uselist=False)

class Question(Base):
    __tablename__ = 'questions'

    id = Column(Integer, primary_key=True)
    question_text = Column(String)

    # Relationships
    options = relationship('Option', back_populates='question')
    results = relationship('MCQResult', back_populates='question')

class Option(Base):
    __tablename__ = 'options'

    id = Column(Integer, primary_key=True)
    option_text = Column(String)
    question_id = Column(Integer, ForeignKey('questions.id'))

    # Relationships
    question = relationship('Question', back_populates='options')


class MCQData(BaseModel):
    Q_id: int
    Student_answer: str
    correct_answer: str
    student_id: int