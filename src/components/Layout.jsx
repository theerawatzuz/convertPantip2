import React from 'react';
import NavBar from "./Nav";

function Layout({children}) {

  return (
    <>
      <NavBar/>
      {children}
    </>
  );
}

export default Layout
