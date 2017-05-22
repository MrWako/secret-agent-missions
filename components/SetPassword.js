import React from 'react';
import { Text, TextInput, View} from '@shoutem/ui';

export class SetPassword extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>In order to stop players being able to edit and view missions please
        enter a short password.</Text>
        <TextInput keyboardType='numeric' returnKeyType='done' maxLength={4} secureTextEntry={true}/>
        <TextInput keyboardType='numeric' returnKeyType='done' maxLength={4} secureTextEntry={true}/>
      </View>
    );
  }
}
