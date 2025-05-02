import React from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryView from './components/ItineraryView';
import Recommendation from './components/Recommendation';
import LayoutWrapper from './components/LayoutWrapper'; // Make sure this path matches your project structure

function App() {
  return (
    <LayoutWrapper>
      <div>
      <style>
  {`
    .title-heading {
      font-size: 2.8rem;
      font-weight: 800;
      color: #ffffff;
      margin: 40px auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
      background: rgba(0, 0, 0, 0.4);
      padding: 15px 25px;
      border-radius: 12px;
      backdrop-filter: blur(5px);
      display: inline-block;
      text-align: center;
    }

    .title-heading-wrapper {
      text-align: center;
    }

    @media (max-width: 600px) {
      .title-heading {
        font-size: 2rem;
        padding: 10px 20px;
      }
    }
  `}
</style>

<div className="title-heading-wrapper">
  <h1 className="title-heading">Travel Itinerary Manager</h1>
</div>

        <ItineraryForm />
        <hr />
        <ItineraryView />
        <hr />
        <Recommendation />
      </div>
    </LayoutWrapper>
  );
}

export default App;
