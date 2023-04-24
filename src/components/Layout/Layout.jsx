import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Main } from './Layout.styled';
import Navigation from '../Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
