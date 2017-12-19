// Core
import React, { Component } from 'react';
import { getLetters } from '../../helpers/fetch';

import Header from './Header';
import Letters from './Letters';
import Menu from './Menu';
import Styles from './styles.scss';

export default class Emails extends Component {
    constructor () {
        super();
        this.openForm = ::this._openForm;
        this.getLetters = ::this._getLetters;
        this.searchLetters = ::this._searchLetters;
    }

    state = {
        isForm:        false,
        currentLetter: 0,
        letters:       [],
        lettersBuf:    []
    };

    componentWillMount () {
        this.getLetters();
    }
    _openForm () {
        this.setState({
            isForm: !this.state.isForm
        });
    }

    _searchLetters (comment) {
        const letters = this.state.lettersBuf.filter(
            (value) =>
                value.name.indexOf(comment) >= 0 ||
                value.theme.indexOf(comment) >= 0
        );

        this.setState(() => ({
            letters
        }));
    }

    async _getLetters () {
        const { letters } = await getLetters('/letters.json');

        this.setState(() => ({
            letters,
            lettersBuf: letters
        }));
    }
    render () {
        const { letters } = this.state;

        return (
            <section className = { Styles.emails }>
                <Header />
                <div className = { Styles.emailsBody }>
                    <Menu />
                    <Letters
                        letters = { letters }
                        searchLetters = { this.searchLetters }
                    />
                </div>
            </section>
        );
    }
}
