import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { EditClueContainer } from '../containers/EditClueContainer.js';

export class EditClue extends React.PureComponent {

  render() {
    return (
      <Screen>
        <Text>Edit Clue</Text>
        <EditClueContainer navigation={this.props.navigation}/>
      </Screen>
    );
  }
}
