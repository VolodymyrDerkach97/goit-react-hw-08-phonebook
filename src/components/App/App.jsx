import { useDispatch } from 'react-redux';

import { useEffect, lazy } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';

import HomePage from '../../pages/Home';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { refreshUser } from 'redux/auth/operations';

// import ContactsMenu from 'components/ContactsMenu';
const ContactsMenu = lazy(() => import('components/ContactsMenu'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
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
              <PrivateRoute redirectTo="/login" component={<ContactsMenu />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
      {/* <Container>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>
        <p>Total number of contacts: {contacts.length} </p>
        <Filter />
        <Contacts contacts={filterContacts()} />

        <ToastContainer autoClose={2000} />
      </Container> */}
    </>
  );
};
