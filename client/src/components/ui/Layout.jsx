import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';




import Footer from './Footer';
import NavLogo from './NavLogo';
const Layout = () => {
  return (
    <>
    <Header/>
      <div><NavLogo/></div>
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
