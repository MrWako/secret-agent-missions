import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

export class Frontpage extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Front Page</Text>
        <Text onPress={() => navigate('Play')}>Play</Text>
        <Text onPress={() => navigate('Edit')}>Edit</Text>
        <Text onPress={() => navigate('Home')}>Home</Text>
      </View>
    );
  }
}
