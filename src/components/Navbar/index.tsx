import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from './styles';
import logo from '../../assets/logo-Sharenergy-1.png';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <img src={logo} alt="Sharenergy logo" />

      <div>
        <Link style={pathname === '/' ? { opacity: '1' } : {}} to="/">
          Usina
        </Link>
        <Link
          style={pathname === '/clients' ? { opacity: '1' } : {}}
          to="/clients"
        >
          Clientes
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
