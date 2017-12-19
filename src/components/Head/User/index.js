import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Styles from './styles.scss';
import { string } from 'prop-types';
import avatar2 from '../../../theme/assets/user.png';

export default class User extends Component {
    static propTypes = {
        avatar: string,
        name:   string
    };
    static contextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired
    };

    constructor () {
        super();
        this.openButtons = ::this._openButtons;
    }

    state = {
        isButtons: false
    };

    _openButtons () {
        this.setState({
            isButtons: !this.state.isButtons
        });
    }
    render () {
        const { avatar = avatar2 } = this.props;
        const { firstName, lastName } = this.context;
        let buttons = '';

        if (this.state.isButtons) {
            buttons = (
                <ul>
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Exit</a>
                    </li>
                </ul>
            );
        } else {
            buttons = <ul />;
        }

        return (
            <div className = { Styles.user }>
                <img src = { avatar } />
                <div>
                    <span onClick = { this.openButtons }>
                        {firstName} {lastName}
                    </span>
                    <CSSTransition
                        classNames = { {
                            enter:       Styles.buttonsInStart,
                            enterActive: Styles.buttonsInEnd,
                            exit:        Styles.buttonsOutStart,
                            exitActive:  Styles.buttonsOutEnd
                        } }
                        in = { this.state.isButtons }
                        timeout = { 500 }>
                        {buttons}
                    </CSSTransition>
                </div>
            </div>
        );
    }
}
