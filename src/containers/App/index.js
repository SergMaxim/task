// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { string } from 'prop-types';

//import Catcher from '../../components/Catcher';
import Emails from '../../components/Emails';
import Head from '../../components/Head';

const option = {
    firstName: 'Максим',
    lastName:  'Сергийчук'
};

export default class App extends Component {
    static childContextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired
    };

    getChildContext () {
        return option;
    }
    render () {
        return (
            <section className = { Styles.app }>
                <Head />
                <Emails />
            </section>
        );
    }
}
