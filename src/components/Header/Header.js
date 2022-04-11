import React from 'react';
import Banner from './Banner';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <div>
            <NavMenu />
            <Banner />
        </div>
    );
};

export default Header;