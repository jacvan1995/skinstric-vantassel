import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="customer-form">
      <h2>Let’s Get Started</h2>
      <p>Enter your details to begin your personalized skincare journey.</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => onSubmit({ name, email })}>Continue</button>
    </section>
  );
};

export default CustomerForm;