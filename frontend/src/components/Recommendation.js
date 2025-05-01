import React, { useState } from 'react';
import { getRecommendation } from '../api';

export default function Recommendation() {
  const [nights, setNights] = useState('');
  const [text, setText] = useState('');

  const fetch = async () => {
    const res = await getRecommendation(nights);
    setText(res.data.recommended_itinerary);
  };

  return (
    <div>
      <h2>Recommended Trip</h2>
      <input type="number" value={nights} onChange={(e) => setNights(e.target.value)} placeholder="Nights (2–8)" />
      <button onClick={fetch}>Get Recommendation</button>
      <p>{text}</p>
    </div>
  );
}
