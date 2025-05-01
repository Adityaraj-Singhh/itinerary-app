import React from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryView from './components/ItineraryView';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <div>
      <div>
  <style>
    {`
      .title-heading {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 800;
        color: #2b6cb0;
        margin-top: 40px;
        margin-bottom: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 600px) {
        .title-heading {
          font-size: 2rem;
        }
      }
    `}
  </style>

  <h1 className="title-heading">Travel Itinerary Manager</h1>
</div>

      <ItineraryForm />
      <hr />
      <ItineraryView />
      <hr />
      <Recommendation />
    </div>
  );
}

export default App;
