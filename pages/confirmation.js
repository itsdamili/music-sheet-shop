import styled from '@emotion/styled';

const ConfirmationContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default function Confirmation() {
  return (
    <ConfirmationContainer>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order is confirmed and will be shipped soon.</p>
    </ConfirmationContainer>
  );
}
