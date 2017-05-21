import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

export class Play extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Text>Play</Text>
        <Text onPress={() => navigate('Mission')}>Frontpage</Text>
      </Screen>
    );
  }
}
