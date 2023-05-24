import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <div>Welcome to your contact book</div>
      ) : (
        <>
          <div>Please </div> <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </>
  );
};
export default Home;
