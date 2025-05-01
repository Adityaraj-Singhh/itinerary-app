import React, { useState } from 'react';
import { createItinerary } from '../api';

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
    <form onSubmit={handleSubmit}>
      <h2>Create Itinerary</h2>
      <input placeholder="Trip Name" value={name} onChange={(e) => setName(e.target.value)} required />

      {days.map((day, i) => (
        <div key={i}>
          <h4>Day {i + 1}</h4>
          <input placeholder="Hotel" value={day.hotel} onChange={(e) => handleChange(i, 'hotel', e.target.value)} required />
          <input placeholder="Activity" value={day.activity} onChange={(e) => handleChange(i, 'activity', e.target.value)} required />
          <input placeholder="Transfer" value={day.transfer} onChange={(e) => handleChange(i, 'transfer', e.target.value)} required />
        </div>
      ))}

      <button type="button" onClick={addDay}>Add Day</button>
      <button type="submit">Submit</button>
    </form>
  );
}
