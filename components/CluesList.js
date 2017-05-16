import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class CluesListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>{this.props.rowData.info}</Text>
        <Text>{this.props.rowData.clue}</Text>
        <Text>{this.props.rowData.answer}</Text>
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
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress()}>Add Clue</Text></View>}
          />
      </View>
    );
  }
}
