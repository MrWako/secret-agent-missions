import React from 'react';
import { Text, View } from '@shoutem/ui';

export class AddButton extends React.PureComponent {

  render() {
    return (
      <View>
        <Text onPress={() => this.props.onPress()}>Add</Text>
      </View>
    );
  }
}
