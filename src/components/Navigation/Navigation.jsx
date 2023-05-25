import { useAuth } from 'hooks';
import { StyledNav, StyledNavLink } from './Navigation.style';
const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
export default Navigation;
