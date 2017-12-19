import React, { Component } from 'react';
import Styles from './styles.scss';
import { func, object } from 'prop-types';

export default class Menu extends Component {

    /*static propTypes = {
        menu:     object.isRequired,
        openForm: func.isRequired
    };*/
    render () {
        return (
            <section className = { Styles.menu }>
                <div className = { Styles.button }>Compose Mail</div>
            </section>
        );
    }
}
