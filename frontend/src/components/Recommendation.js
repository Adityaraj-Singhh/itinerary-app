import React, { useState } from 'react';
import { getRecommendation } from '../api';
import '../Designs/Recommendation.css'; // Import the CSS file

export default function Recommendation() {
  const [nights, setNights] = useState('');
  const [text, setText] = useState('');

  const fetch = async () => {
    const res = await getRecommendation(nights);
    setText(res.data.recommended_itinerary);
  };

  return (
    <div className="recommendation-container">
      <h2 className="recommendation-title">Get a Recommended Trip</h2>

      <div className="input-container">
        <input
          type="number"
          min="2"
          max="8"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
          placeholder="Enter number of nights (2–8)"
          className="input-field"
        />
        <button onClick={fetch} className="recommendation-button">
          Get Recommendation
        </button>
      </div>

      {text && (
        <div className="itinerary-container">
          <h3 className="itinerary-title">Suggested Itinerary:</h3>
          <p className="itinerary-text">{text}</p>
        </div>
      )}
    </div>
  );
}
