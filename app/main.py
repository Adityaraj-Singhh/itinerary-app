from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .routes import router as itinerary_router
from .mcp import router as mcp_router

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

# Initialize FastAPI app
app = FastAPI(
    title="Travel Itinerary API",
    description="Create, view, and get recommended itineraries",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://itinerary-lime.vercel.app"],  # Replace "*" with ["http://localhost:3000"] for stricter access
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(itinerary_router)
app.include_router(mcp_router)