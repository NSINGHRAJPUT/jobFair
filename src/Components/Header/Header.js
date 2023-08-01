// Header.js
import React, { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
  if(window.innerWidth<=768)
    {
      setMenu(!menu);
    }
  };

  return (
    <header className="header-absolute" data-aos="fade-right">
      <div className="spaceX light">Job Fair</div>
      <nav className={menu ? 'heigh light fon-500 pointer ddin' : ' light fon-500 pointer ddin'}>
        <span> <a href='#hero' onClick={menuHandler}>link 1</a></span>
        <span><a href='#About' onClick={menuHandler}>link 2</a></span>
        <span><a href='#Skills' onClick={menuHandler}>link 3</a></span>
        <span><a href='#reviews' onClick={menuHandler}>link 4</a></span>
        <span><a href='#Contact' onClick={menuHandler}>link 5</a></span>
      </nav>
      <div id='nav'>
        <span></span>
        <span className="header-burger">
           <HiMenuAlt4 fontSize="2rem" color="white" onClick={menuHandler} />
        </span>
      </div>
    </header>
  );
};

export default Header;
