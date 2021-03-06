import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { CluesContainer } from '../containers/CluesContainer.js';

export class EditMission extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <CluesContainer navigation={this.props.navigation}/>
        <Text onPress={() => navigate('Mission')}>Frontpage</Text>
      </Screen>
    );
  }
}
