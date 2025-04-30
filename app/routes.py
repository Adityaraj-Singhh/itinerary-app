from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import schemas, models, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/itinerary", response_model=schemas.ItineraryOut)
def create_itinerary(itinerary: schemas.ItineraryCreate, db: Session = Depends(get_db)):
    db_itinerary = models.Itinerary(name=itinerary.name)
    db.add(db_itinerary)
    db.commit()
    db.refresh(db_itinerary)

    for day in itinerary.days:
        db_day = models.Day(**day.dict(), itinerary_id=db_itinerary.id)
        db.add(db_day)
    db.commit()
    db.refresh(db_itinerary)
    return db_itinerary

@router.get("/itinerary/{itinerary_id}", response_model=schemas.ItineraryOut)
def read_itinerary(itinerary_id: int, db: Session = Depends(get_db)):
    itinerary = db.query(models.Itinerary).filter(models.Itinerary.id == itinerary_id).first()
    if not itinerary:
        raise HTTPException(status_code=404, detail="Itinerary not found")
    return itinerary
