import { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Checkout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zipCode: '',
    mobileNumber: ''
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
    if (!formData.name || !formData.address || !formData.zipCode || !formData.mobileNumber) {
      setError('Please fill out all fields');
      return;
    }
    setError('');
    router.push('/payment');
  };

  return (
    <div className='container'>
      <h1>Delivery Information</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <PrimaryButton type="submit">Continue to Payment</PrimaryButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </div>
  );
}
