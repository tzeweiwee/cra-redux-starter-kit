import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const navbarItems = routes.map((route, index) => 
        route.navbar && <NavbarItem key={index} title={route.title} path={route.path} />
    );
    return (
        <div className={styles.container}>
            {navbarItems}
        </div>
    );
}

const NavbarItem = ({title, path}) => {
    return (
        <div className={styles.itemContainer}>
            <Link className={styles.item} to={path}>{title}</Link>
        </div>
    )
}

export default Navbar
