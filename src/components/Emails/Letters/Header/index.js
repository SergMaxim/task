import React, { Component } from 'react';
import Styles from './styles.scss';
import { func, number } from 'prop-types';

export default class Header extends Component {
    static propTypes = {
        count:         number.isRequired,
        searchLetters: func.isRequired
    };

    constructor () {
        super();
        this.handleSubmit = ::this._handleSubmit;
        this.handleInputChange = ::this._handleInputChange;
    }

    state = {
        comment: ''
    };
    _handleSubmit (event) {
        event.preventDefault();
        const { comment } = this.state;

        this.props.searchLetters(comment);
    }

    _handleInputChange (event) {
        const { value: comment } = event.target;

        this.setState({
            comment
        });
    }
    render () {
        const { count } = this.props;

        return (
            <section className = { Styles.header }>
                <div>
                    Inbox <span>{count}</span>
                </div>
                <form className = { Styles.search } onSubmit = { this.handleSubmit }>
                    <input
                        placeholder = 'search'
                        type = 'text'
                        onKeyUp = { this.handleInputChange }
                    />
                    <input type = 'submit' value = '' />
                </form>
            </section>
        );
    }
}
