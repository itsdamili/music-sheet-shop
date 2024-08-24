import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton';
import styled from '@emotion/styled';

const PaymentContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default function Payment() {
  const router = useRouter();

  const handlePayment = () => {
    alert('Payment Successful!');
    router.push('/confirmation');
  };

  return (
    <PaymentContainer>
      <h1>Payment</h1>
      <p>Your total is $XX.XX</p>
      <PrimaryButton onClick={handlePayment}>Pay Now</PrimaryButton>
    </PaymentContainer>
  );
}
