import React from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Dimensions,
} from 'react-native'

import GesturePassword from 'react-native-smart-gesture-password'
import Button from 'react-native-smart-button'

export class Keypad extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isWarning: false,
            message: 'Verify your gesture password',
            messageColor: '#A9A9A9',
            password: '',
            thumbnails: [],
        };
        this._cachedPassword = ''
    }

    componentDidMount () {
        this._cachedPassword = '13457' //get cached gesture password
    }

    render () {
        return (
            <GesturePassword/>
        )
    }
}
