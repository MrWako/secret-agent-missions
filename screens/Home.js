import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import { Missions } from '../containers/Missions.js';

export class Home extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Missions/>
        <Text onPress={() => navigate('Frontpage')}>Frontpage</Text>
      </View>
    );
  }
}
