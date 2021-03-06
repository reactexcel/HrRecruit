import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';
import style from './style';
import { HEXCOLOR } from '../../style/hexcolor';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header androidStatusBarColor={HEXCOLOR.PickledBluewood} style={style.headerColor}>
        <Body>
          <Title>
            <Text style={style.headerTitle}>{this.props.name}</Text>
          </Title>
        </Body>
        {this.props.isNetwork ?
          <Right>
            <Button
              onPress={() => {
                this.props.onPress();
              }}
              transparent
            >
              <Icon
                style={style.headerTitle}
                name="md-log-out"
              />
            </Button>
          </Right>
          : Platform.OS === 'ios' ? <Right /> : null}
      </Header>
    );
  }
}
