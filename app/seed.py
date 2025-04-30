from app import models, database

# Create tables if not already created
models.Base.metadata.create_all(bind=database.engine)

db = database.SessionLocal()

# Check if data already exists
if db.query(models.Itinerary).count() == 0:
    
    itinerary = models.Itinerary(name="Sample Phuket-Krabi Trip")
    db.add(itinerary)
    db.commit()

    for i in range(1, 4):
        db.add(models.Day(
            day_number=i,
            hotel=f"Hotel {i}",
            activity="Beach",
            transfer="Taxi",
            itinerary_id=itinerary.id
        ))
    db.commit()
    print("✅ Sample data seeded successfully.")
else:
    print("⚠️ Data already seeded. Skipping.")
