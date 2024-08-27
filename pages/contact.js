import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import TextInput from '../components/inputs/TextInput';
import PrimaryButton from '../components/buttons/PrimaryButton';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (formData.name === '' || formData.message === '') {
      setError('Please fill out all fields');
      return;
    }

    console.log('Form submitted', formData); // Placeholder for real submission
    setError('');
    alert('Thank you for your message! We will get back to you shortly.'); // Confirmation message
  };

  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          as="textarea"
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <PrimaryButton type="submit">Send Message</PrimaryButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </div>
  );
}
