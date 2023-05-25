import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WrapperUserMenu } from './UserMenu.styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperUserMenu>
      <p>{user.email}</p>

      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </WrapperUserMenu>
  );
};
export default UserMenu;
