import React from 'react';
import Styles from './header.scss';

const Header = () => (
    <section className = { Styles.header }>
        <ul>
            <li>
                <a>Home</a>
            </li>
            <li>Email</li>
        </ul>
        <p>Email</p>
    </section>
);

export default Header;
