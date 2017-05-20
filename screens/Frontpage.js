import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

export class Frontpage extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Text>Front Page</Text>
        <Text onPress={() => navigate('Play')}>Play</Text>
        <Text onPress={() => navigate('Edit')}>Edit</Text>
        <Text onPress={() => navigate('Home')}>Home</Text>
      </Screen>
    );
  }
}
