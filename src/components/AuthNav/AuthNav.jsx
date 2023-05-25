import { WrapperAuthNav, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <WrapperAuthNav>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </WrapperAuthNav>
  );
};
export default AuthNav;
