from pydantic import BaseModel


class EmployeeCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    department: str


class EmployeeUpdate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    department: str


class EmployeeResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    phone: str
    department: str

    class Config:
        from_attributes = True