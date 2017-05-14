import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

export class Play extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Text>Play</Text>
        <Text onPress={() => navigate('Frontpage')}>Frontpage</Text>
      </View>
    );
  }
}
