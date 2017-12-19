import React from 'react';
import moment from 'moment';
import { bool, number, string } from 'prop-types';

import Styles from './styles.scss';

const Letter = (props) => {
    let style = null;

    if (props.star) {
        style = {
            backgroundPosition: 'top center'
        };
    }

    return (
        <section className = { Styles.letter }>
            <span className = { Styles.star } style = { style } />
            <div className = { Styles.name }> {props.name}</div>
            <div className = { Styles.theme }> {props.theme}</div>

            <time>
                {moment
                    .unix(props.time)
                    .locale('uk')
                    .format('D.M.YY HH:mm')}
            </time>
        </section>
    );
};

Letter.propTypes = {
    name:  string.isRequired,
    star:  bool.isRequired,
    theme: string.isRequired,
    time:  number.isRequired
};

export default Letter;
