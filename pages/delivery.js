import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDeliveryInfo } from '../slices/cartSlice';
import { useRouter } from 'next/router';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    <div className='container'>
      <h1>Delivery Information</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={deliveryDetails.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={deliveryDetails.address} onChange={handleChange} required />
        <input type="text" name="zipCode" placeholder="Zip Code" value={deliveryDetails.zipCode} onChange={handleChange} required />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={deliveryDetails.mobileNumber} onChange={handleChange} required />
        <button type="submit">Continue to Payment</button>
      </Form>
    </div>
  );
}
