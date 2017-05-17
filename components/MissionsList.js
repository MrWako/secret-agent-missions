import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class MissionsListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onMissionPress()}>
        <Image
          styleName="medium-square"
          source={{ uri: this.props.rowData.image }}>
          <Tile>
            <Title styleName="md-gutter-bottom">{this.props.rowData.title}</Title>
          </Tile>
        </Image>
        <Text>{this.props.rowData.id}</Text>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }
}

export class MissionsList extends React.PureComponent {

  render() {
    return (
      <View>
        <ListView
          data={this.props.summary}
          renderRow={(rowData, sectionID, rowID) =>
              <MissionsListItem rowData={rowData}
               onMissionPress={() => this.props.onMissionPress(rowData.id)}/>}
          renderHeader={() => <View><Text>Missions</Text></View>}
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress()}>Add Mission</Text></View>}
          />
      </View>
    );
  }
}
