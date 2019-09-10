import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'underscore';

var BACKGROUND_COLOR, BORDER_RADIUS, BORDER_WIDTH, COLOR, MARGIN, SIZE, BORDER_COLOR;

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#FFF',
      borderRadius: 0,
      borderWidth: 2,
      color: '#000',
      margin: 2,
      name: '',
      onChange: null,
      size: 20,
      borderColor: '#000'
    };
  }

  componentDidMount() {
    this.setState(_.extend({}, this.props.style, _.omit(this.props, 'style')))
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    BACKGROUND_COLOR = this.state.backgroundColor;
    BORDER_RADIUS = this.state.borderRadius;
    BORDER_WIDTH = this.state.borderWidth;
    COLOR = this.state.color;
    MARGIN = this.state.margin;
    SIZE = this.state.size;
    BORDER_COLOR = this.state.borderColor;
    return (
      this.props.withPress ? (
        <TouchableHighlight underlayColor='transparent'
          onPress={() => { this._toggleCheck() }}
          style={{backgroundColor: BACKGROUND_COLOR, borderColor: BORDER_COLOR,
            borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
            height: SIZE, margin: MARGIN, width: SIZE }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                { this.props.checked &&
                  <Icon name='check' size={SIZE - 5 } color={COLOR}/> }
                </View>
              </TouchableHighlight>
      ) : (
        <View
          style={{backgroundColor: BACKGROUND_COLOR, borderColor: BORDER_COLOR,
            borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
            height: SIZE, margin: MARGIN, width: SIZE }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                { this.props.checked &&
                  <Icon name='check' size={SIZE - 5 } color={COLOR}/> }
                </View>
              </View>
      )
    );
  }

  _toggleCheck() {
    this.props.onChange && this.props.onChange(this.props.name, !this.props.checked);
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  withProps: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.number,
  style: PropTypes.object,
}

module.exports = Checkbox;
