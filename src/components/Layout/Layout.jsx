import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import { Suspense } from 'react';
import { MainStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <MainStyled>
          <Outlet />
        </MainStyled>
      </Suspense>
    </>
  );
};

export default Layout;
