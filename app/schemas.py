from pydantic import BaseModel
from typing import List, Optional

class DayCreate(BaseModel):
    day_number: int
    hotel: str
    activity: str
    transfer: str

class ItineraryCreate(BaseModel):
    name: str
    days: List[DayCreate]

class DayOut(DayCreate):
    id: int
    class Config:
        orm_mode = True

class ItineraryOut(BaseModel):
    id: int
    name: str
    days: List[DayOut]
    class Config:
        orm_mode = True
