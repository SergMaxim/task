import React, { Component } from 'react';
import Styles from './styles.scss';
import User from './User';

export default class Head extends Component {
    render () {
        return (
            <section className = { Styles.head }>
                <div className = { Styles.bell }>
                    <span className = { Styles.count }>2</span>
                </div>
                <div className = { Styles.letter }>
                    <span className = { Styles.count }>2</span>
                </div>
                <div className = { Styles.star } />
                <User />
                <form className = { Styles.search }>
                    <input placeholder = 'search' type = 'text' />
                    <input type = 'submit' value = '' />
                </form>
            </section>
        );
    }
}
