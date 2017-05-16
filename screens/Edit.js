import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import { Clues } from '../containers/Clues.js';
import { CluesList } from '../components/CluesList.js';

export class Edit extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Clues navigation={this.props.navigation}/>
        <Text onPress={() => navigate('Frontpage')}>Frontpage</Text>
      </View>
    );
  }
}
