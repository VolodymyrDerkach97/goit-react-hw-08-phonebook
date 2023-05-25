import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooks';
import { HeaderNavigation } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderNavigation>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderNavigation>
  );
};
export default AppBar;
