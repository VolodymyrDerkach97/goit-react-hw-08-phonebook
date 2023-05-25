import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
