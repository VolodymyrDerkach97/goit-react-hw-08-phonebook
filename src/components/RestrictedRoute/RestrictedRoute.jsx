import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};
