import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

export class Edit extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Text>Edit Page</Text>
        <Text onPress={() => navigate('Frontpage')}>Frontpage</Text>
      </View>
    );
  }
}
