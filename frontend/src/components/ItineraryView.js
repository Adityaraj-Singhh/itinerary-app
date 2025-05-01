import React, { useState } from 'react';
import { getItinerary } from '../api';
import '../Designs/ItineraryView.css'; // Import the CSS file

export default function ItineraryView() {
  const [id, setId] = useState('');
  const [itinerary, setItinerary] = useState(null);

  const fetch = async () => {
    const res = await getItinerary(id);
    setItinerary(res.data);
  };

  return (
    <div className="itinerary-view-container">
      <h2 className="title">View Your Itinerary</h2>

      <div className="fetch-container">
        <input
          type="text"
          placeholder="Enter Itinerary ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-field"
        />
        <button onClick={fetch} className="fetch-button">
          Fetch
        </button>
      </div>

      {itinerary && (
        <div className="itinerary-details">
          <h3 className="itinerary-name">{itinerary.name}</h3>
          <div className="days-container">
            {itinerary.days.map((day) => (
              <div key={day.id} className="day-card">
                <p className="day-title">Day {day.day_number}</p>
                <p className="day-details">
                  <span className="detail-label">Hotel:</span> {day.hotel}<br />
                  <span className="detail-label">Activity:</span> {day.activity}<br />
                  <span className="detail-label">Transfer:</span> {day.transfer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
