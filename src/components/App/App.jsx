import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import Layout from 'components/Layout/Layout';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsMenu = lazy(() => import('components/ContactsMenu'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsMenu />}
                />
              }
            />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </Container>
    )
  );
};
