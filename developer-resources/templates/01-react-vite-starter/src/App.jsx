import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>⚛️ Tech Nexus React Starter</h1>
      <p>Your Vite + React environment is successfully running!</p>
      <button 
        onClick={() => alert("Ready to build!")}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Test Click
      </button>
    </div>
  )
}

export default App;
