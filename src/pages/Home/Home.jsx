import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { MessageWraper } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <MessageWraper>
          <h2>Welcome to your Phonebook</h2>
        </MessageWraper>
      ) : (
        <MessageWraper>
          <p>
            Welcome to the Phonebook application. <br />
            In order to start using, please{' '}
            <NavLink to="/login">Log In</NavLink> to your account{' '}
          </p>
        </MessageWraper>
      )}
    </>
  );
};
export default Home;
