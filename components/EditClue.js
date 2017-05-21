import React from 'react';
import { ImagePicker } from 'expo';
import { Caption, Card, Divider, Icon, ListView, Text,
  View, Image, Row, Tile, Title, TextInput,
  TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';

export class EditClue extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>{this.props.clue.info}</Text>
        <Text>{this.props.clue.clue}</Text>
      </View>
    );
  }
}
