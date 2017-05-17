import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TextInput, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class CluesListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <TextInput defaultValue={this.props.rowData.info} onChangeText={() => {}} />
        <TextInput defaultValue={this.props.rowData.clue} onChangeText={() => {}} />
        <Divider styleName="line" />
      </View>
    );
  }
}

export class CluesList extends React.PureComponent {

  render() {
    return (
      <View>
        <ListView
          data={this.props.clues}
          renderRow={(rowData, sectionID, rowID) =>
              <CluesListItem rowData={rowData}/>}
          renderHeader={() => <View><Text>Clues</Text></View>}
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress(this.props.missionId)}>Add Clue</Text></View>}
          />
      </View>
    );
  }
}
