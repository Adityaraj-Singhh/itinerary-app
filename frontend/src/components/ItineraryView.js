import React, { useState } from 'react';
import { getItinerary } from '../api';

export default function ItineraryView() {
  const [id, setId] = useState('');
  const [itinerary, setItinerary] = useState(null);

  const fetch = async () => {
    const res = await getItinerary(id);
    setItinerary(res.data);
  };

  return (
    <div>
      <h2>View Itinerary</h2>
      <input placeholder="Itinerary ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetch}>Fetch</button>

      {itinerary && (
        <div>
          <h3>{itinerary.name}</h3>
          {itinerary.days.map(day => (
            <div key={day.id}>
              <b>Day {day.day_number}</b>: {day.hotel} – {day.activity} via {day.transfer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
