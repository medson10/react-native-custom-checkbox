import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var DEFAULT_BACKGROUND_COLOR = '#FFF';
var DEFAULT_BORDER_RADIUS = 0;
var DEFAULT_BORDER_WIDTH = 2;
var DEFAULT_COLOR = '#000';
var DEFAULT_SIZE = 20;

var BACKGROUND_COLOR = DEFAULT_BACKGROUND_COLOR;
var BORDER_RADIUS = DEFAULT_BORDER_RADIUS;
var BORDER_WIDTH = DEFAULT_BORDER_WIDTH;
var COLOR = DEFAULT_COLOR;
var SIZE = DEFAULT_SIZE;

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    componentDidMount() {
        BACKGROUND_COLOR = this.props.style.backgroundColor || DEFAULT_BACKGROUND_COLOR;
        BORDER_RADIUS = this.props.style.borderRadius || DEFAULT_BORDER_RADIUS;
        BORDER_WIDTH = this.props.style.borderWidth || DEFAULT_BORDER_WIDTH;
        SIZE = this.props.size || DEFAULT_SIZE;
        COLOR = this.props.style.color || DEFAULT_COLOR;

        this.setState({ checked: this.props.checked });
    }

    render() {
        return (
            <TouchableHighlight underlayColor='transparent'
                onPress={() => { this._toggleCheck() }}
                style={{backgroundColor: BACKGROUND_COLOR, borderColor: COLOR,
                        borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
                        height: SIZE, width: SIZE }}>
                <View>
                    { this.state.checked &&
                    <Icon name='check' size={SIZE - 5 } color={COLOR}/> }
                </View>
            </TouchableHighlight>
        );
    }

    _toggleCheck() {
        var checked = !this.state.checked;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(checked);
    }
}

module.exports = Checkbox;
