// components/Layout.js
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  a {
    margin-right: 1rem;
    color: #fff;
    text-decoration: none;
  }
`;

const Container = styled.div`
  padding: 1rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Product Catalog</h1>
        <Nav>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </Nav>
      </Header>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;
