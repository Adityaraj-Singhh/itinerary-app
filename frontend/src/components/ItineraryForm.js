import React, { useState } from 'react';
import { createItinerary } from '../api';
import '../Designs/ItineraryForm.css'; // Import the CSS file

export default function ItineraryForm() {
  const [name, setName] = useState('');
  const [days, setDays] = useState([{ day_number: 1, hotel: '', activity: '', transfer: '' }]);

  const addDay = () => {
    setDays([...days, { day_number: days.length + 1, hotel: '', activity: '', transfer: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newDays = [...days];
    newDays[index][field] = value;
    setDays(newDays);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, days };
    const res = await createItinerary(data);
    alert(`Created itinerary with ID: ${res.data.id}`);
  };

  return (
    <div className="itinerary-container">
      <h2 className="title">Plan Your Perfect Trip</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Trip Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />

        {days.map((day, i) => (
          <div key={i} className="day-card">
            <h4 className="day-title">Day {i + 1}</h4>
            <div className="day-grid">
              <input
                type="text"
                placeholder="Hotel"
                value={day.hotel}
                onChange={(e) => handleChange(i, 'hotel', e.target.value)}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Activity"
                value={day.activity}
                onChange={(e) => handleChange(i, 'activity', e.target.value)}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Transfer"
                value={day.transfer}
                onChange={(e) => handleChange(i, 'transfer', e.target.value)}
                required
                className="input"
              />
            </div>
          </div>
        ))}

        <div className="button-group">
          <button type="button" onClick={addDay} className="button green">
            + Add Another Day
          </button>
          <button type="submit" className="button blue">
            Submit Itinerary
          </button>
        </div>
      </form>
    </div>
  );
}
