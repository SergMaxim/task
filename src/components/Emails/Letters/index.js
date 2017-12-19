import React, { Component } from 'react';
import { arrayOf, bool, shape, string, number, func } from 'prop-types';
import Styles from './styles.scss';
import Letter from './Letter';
import Header from './Header';
import { getUniqueID } from '../../../helpers';

export default class Letters extends Component {
    static propTypes = {
        letters: arrayOf(
            shape({
                name:  string.isRequired,
                star:  bool.isRequired,
                theme: string.isRequired,
                time:  number.isRequired
            }).isRequired
        ).isRequired,
        searchLetters: func.isRequired
    };

    render () {
        const { letters: postsData, searchLetters } = this.props;
        const letters = postsData.map((props) => {
            const id = getUniqueID();

            return <Letter key = { id } { ...props } />;
        });

        return (
            <section className = { Styles.letters }>
                <Header
                    count = { postsData.length }
                    searchLetters = { searchLetters }
                />
                {letters}
            </section>
        );
    }
}
