import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">Get in Touch</h3>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="block w-full p-2 mb-2 bg-gray-700 rounded-lg" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="block w-full p-2 mb-2 bg-gray-700 rounded-lg" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="block w-full p-2 mb-2 bg-gray-700 rounded-lg" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
    </form>
  );
};

export default ContactForm;
