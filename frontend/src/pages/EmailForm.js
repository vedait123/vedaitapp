// EmailForm.js
import React, { useState } from 'react';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8081/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ to, subject, text })
    });
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.log('Error sending email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Recipient Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;