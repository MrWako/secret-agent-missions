import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { PlayClueContainer } from '../containers/PlayClueContainer.js';

export class PlayClue extends React.PureComponent {

  render() {
    return (
      <Screen>
        <PlayClueContainer navigation={this.props.navigation}/>
      </Screen>
    );
  }
}
