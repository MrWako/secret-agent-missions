import React from 'react';
import { ImagePicker } from 'expo';
import { Caption, Card, Divider, Icon, ListView, Text,
  View, Image, Row, Tile, Title, TextInput,
  TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';

export class EditClue extends React.PureComponent {

  render() {
    return (
      <View>
        <TextInput
          multiline
          defaultValue={this.props.clue.info}
          onChangeText={(text) => this.props.onInfoChange(this.props.selection.missionId,
            this.props.selection.clueIndex, text)}/>
        <TextInput
          multiline
          defaultValue={this.props.clue.clue}
          onChangeText={(text) => this.props.onClueChange(this.props.selection.missionId,
            this.props.selection.clueIndex, text)}/>
        <Text onPress={() => this.props.onBarcodePress()}>Scan Barcode</Text>
      </View>
    );
  }
}
