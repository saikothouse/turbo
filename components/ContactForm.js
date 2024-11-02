"use client"; // Add this line to make it a client component

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      name,
      email,
      message,
    }, 'YOUR_PUBLIC_KEY')
      .then((response) => {
        console.log(response );
        setSent(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="p-2 bg-gray-100 rounded-lg" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 bg-gray-100 rounded-lg" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="p-2 bg-gray-100 rounded-lg" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
      {sent && <p className="text-green-500">Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
