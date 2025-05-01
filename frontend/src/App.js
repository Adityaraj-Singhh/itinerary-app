import React from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryView from './components/ItineraryView';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <div>
      <h1>Travel Itinerary Manager</h1>
      <ItineraryForm />
      <hr />
      <ItineraryView />
      <hr />
      <Recommendation />
    </div>
  );
}

export default App;
