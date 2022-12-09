import React, { useState } from 'react';
import NavbarControls from './NavbarControls';
import NavbarContent from './NavbarContent';

const MobileNavbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  return (
    <nav
      className={`${
        isNavbarOpened ? 'bg-dark' : 'bg-black'
      } block text-white transition-all duration-150 ease-in md:hidden`}
    >
      <NavbarControls
        isNavbarOpened={isNavbarOpened}
        setIsNavbarOpened={setIsNavbarOpened}
      />
      <div>{isNavbarOpened ? <NavbarContent /> : <></>}</div>
    </nav>
  );
};

export default MobileNavbar;
