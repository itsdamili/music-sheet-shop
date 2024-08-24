import Navbar from './Navbar';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';

export default function Layout({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
