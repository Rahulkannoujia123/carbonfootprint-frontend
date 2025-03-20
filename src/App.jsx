import React, { useState } from 'react';
import { create } from 'zustand';

const useCarbonStore = create((set) => ({
  footprint: null,
  recommendations: [],
  setResults: (footprint, recommendations) => set({ footprint, recommendations })
}));

const App = () => {
  const [distance, setDistance] = useState('');
  const { footprint, recommendations, setResults } = useCarbonStore();

  const calculateFootprint = async () => {
    const response = await fetch('https://carbon-footprint-cyan.vercel.app/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ distance: parseFloat(distance) })
    });
    const data = await response.json();
    setResults(data.footprint, data.recommendations);
  };

  return (
    <div>
      <h1>CarbonTrackr</h1>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Enter travel distance (km)"
      />
      <button onClick={calculateFootprint}>Calculate</button>
      {footprint !== null && (
        <div>
          <h2>Carbon Footprint: {footprint} kg CO2</h2>
          <h3>Recommendations:</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;