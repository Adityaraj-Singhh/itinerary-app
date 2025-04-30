from fastapi import FastAPI
from . import models, database
from .routes import router as itinerary_router
from .mcp import router as mcp_router
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(
    title="Travel Itinerary API",
    description="Create, view, and get recommended itineraries",
    version="1.0.0"
)

app.include_router(itinerary_router)
app.include_router(mcp_router)

