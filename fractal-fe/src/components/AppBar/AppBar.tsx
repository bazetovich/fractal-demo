import { Link, useLocation } from 'react-router-dom';
import AppBarC from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const menuConfig = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/new-payment',
    title: 'New Payment',
  },
  {
    to: '/payment-history',
    title: 'Payment History',
  },
];

export const AppBar = () => {
  let location = useLocation();

  const _isItemActive = (to: string) => location.pathname === to;

  return (
    <AppBarC component="nav">
      <Container maxWidth="lg">
        <Toolbar>
          {menuConfig.map(({ title, to }) => (
            <Button key={title}>
              {_isItemActive(to) ? (
                <MenuLinkActive to={to}>{title}</MenuLinkActive>
              ) : (
                <MenuLink to={to}>{title}</MenuLink>
              )}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBarC>
  );
};

const MenuLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  text-transform: none;

  :hover {
    color: #e9e9e9;
  }
`;

const MenuLinkActive = styled(MenuLink)`
  text-decoration: underline;
`;
