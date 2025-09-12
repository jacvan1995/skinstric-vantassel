import React, { useState } from 'react';

const CodeEntry = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  return (
    <section className="code-entry">
      <h1>Enter Your Skinstric Code</h1>
      <p>This code unlocks your personalized skincare experience.</p>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="e.g. SKN-2025-XYZ"
      />
      <button onClick={() => onSubmit(code)}>Continue</button>
    </section>
  );
};

export default CodeEntry;