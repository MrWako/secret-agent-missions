import React from 'react';
import { Divider, Icon, ListView, Text, View, Image, Row, Tile, Title, TextInput, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class CluesListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <Row>
          <Icon name="share" />
          <View styleName="vertical">
            <Text>{this.props.rowData.clue}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
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
