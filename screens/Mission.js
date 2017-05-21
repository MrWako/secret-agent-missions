import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

export class Mission extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Text>Front Page</Text>
        <Text onPress={() => navigate('Play')}>Play</Text>
        <Text onPress={() => navigate('EditMission')}>Edit</Text>
        <Text onPress={() => navigate('AllMissions')}>Home</Text>
      </Screen>
    );
  }
}
