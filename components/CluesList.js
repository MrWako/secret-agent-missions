import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class CluesListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <Text>Clue</Text>
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
          data={this.props.missionSummary}
          renderRow={(rowData, sectionID, rowID) =>
              <CluesListItem rowData={rowData}/>}
          renderHeader={() => <View><Text>Missions</Text></View>}
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress()}>Add Clue</Text></View>}
          />
      </View>
    );
  }
}
