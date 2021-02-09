import React from 'react';
import './Header.css'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import {
    Link
} from 'react-router-dom';


const Header = () => (
    <>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to='/'>home</Link>
            <Link color="inherit" to='/about'>about</Link>
            <Link color="textPrimary" to='/quiz'>quiz</Link>
        </Breadcrumbs>
        <br/><br/>
    </>
)

export default Header;