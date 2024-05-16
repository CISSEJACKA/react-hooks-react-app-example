import React from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent'; // Ensure this import is correct

function App() {
  return (
    <div>
      <h1>Now</h1> {/* Step 1: Change content to 'Now' */}
      <ExampleComponent /> {/* Ensure only one instance */}
      <TestComponent /> {/* Step 3: Add TestComponent below ExampleComponent */}
    </div>
  );
}

export default App;

