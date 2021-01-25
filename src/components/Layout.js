import * as React from 'react';
import Header from './Header';
import Spacer from './Spacer';

const pageStyles = {
  color: '#232129',
  margin: '0 auto',
  maxWidth: '900px',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
};
const Layout = ({children}) => {
  return (
    <main style={pageStyles}>
      <Header />
      <Spacer height="x8" />
      <Spacer height="x8" />
      {children}
    </main>
  );
};

export default Layout;
