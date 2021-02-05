import React from 'react';
import './Header.css'

import {
    Link
} from 'react-router-dom';

const Header = () => (
    <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/quiz'>quiz</Link>
    </nav>
)

export default Header;