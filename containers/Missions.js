import React from 'react';
import { View } from 'react-native';

import { MissionsList } from '../components/MissionsList.js';

export class Missions extends React.PureComponent {

  render() {
    return (
      <View style={{flex: 1}}>
        <MissionsList/>
      </View>
    );
  }
}
