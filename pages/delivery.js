import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { setDeliveryInfo } from '../slices/cartSlice';
import { useRouter } from 'next/router';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Delivery() {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    zipCode: '',
    mobileNumber: '',
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDeliveryInfo(deliveryDetails));
    router.push('/payment');
  };

  return (
    <Container>
      <h1>Delivery Information</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" value={deliveryDetails.name} onChange={handleChange} required />
        <Input type="text" name="address" placeholder="Address" value={deliveryDetails.address} onChange={handleChange} required />
        <Input type="text" name="zipCode" placeholder="Zip Code" value={deliveryDetails.zipCode} onChange={handleChange} required />
        <Input type="text" name="mobileNumber" placeholder="Mobile Number" value={deliveryDetails.mobileNumber} onChange={handleChange} required />
        <SubmitButton type="submit">Continue to Payment</SubmitButton>
      </Form>
    </Container>
  );
}
