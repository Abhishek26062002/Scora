from pydantic import BaseModel
from typing import List, Dict, Any

class MCQData(BaseModel):
    Q_id: List[int]
    Student_answer: List[str]
    correct_answer: List[str]

class MCQResponse(BaseModel):
    score: int
    responses: Dict[str, List[Any]]

class DescriptiveData(BaseModel):
    Q_id: int
    question: str
    Student_answer: str
    marks: int
    student_id: int

class DescriptiveResponse(BaseModel):
    score: int
    responses: Dict[str, List[Any]]

class MCQResultCreate(BaseModel):
    q_id: int
    student_answer: str
    correct_answer: str
    score: float

class DescriptiveResultCreate(BaseModel):
    q_id: int
    question: str
    student_answer: str
    marks: float
    student_id: int

class StudentPerformanceCreate(BaseModel):
    student_id: int
    student_name: str
    mcq_results: List[MCQResultCreate]
    descriptive_results: List[DescriptiveResultCreate]

class MCQResult(BaseModel):
    id: int
    question_id: int
    student_answer: str
    correct_answer: str
    score: float

    class Config:
        orm_mode = True

class DescriptiveResult(BaseModel):
    q_id: int
    question: str
    student_answer: str
    marks: float
    student_id: int

    class Config:
        orm_mode = True

class StudentPerformance(BaseModel):
    id: int
    student_id: int
    student_name: str
    mcq_results: List[MCQResult]
    descriptive_results: List[DescriptiveResult]

    class Config:
        orm_mode = True

class Courses(BaseModel):
    courses: List[str]
