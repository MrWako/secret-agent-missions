import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { SetPassword } from '../components/SetPassword.js';
import { MissionsContainer } from '../containers/MissionsContainer.js';

export class AllMissions extends React.PureComponent {

  render() {

    return (
        <SetPassword/>
    );

    /*
    return (
      <Screen>
        <MissionsContainer navigation={this.props.navigation}/>
      </Screen>
    );
    */

  }
}
