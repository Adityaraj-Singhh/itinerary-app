from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from .database import Base

class Itinerary(Base):
    __tablename__ = 'itineraries'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    days = relationship("Day", back_populates="itinerary")

class Day(Base):
    __tablename__ = 'days'
    id = Column(Integer, primary_key=True, index=True)
    day_number = Column(Integer)
    itinerary_id = Column(Integer, ForeignKey('itineraries.id'))

    hotel = Column(String)
    activity = Column(String)
    transfer = Column(String)

    itinerary = relationship("Itinerary", back_populates="days")
