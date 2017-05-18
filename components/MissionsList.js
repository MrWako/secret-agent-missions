import React from 'react';
import { Button, Caption, Divider, Icon, ListView, Text, View, Image, Row, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';


class MissionsListItem extends React.PureComponent {

  render() {
    return (
      <View>
          <TouchableOpacity onPress={() => this.props.onMissionPress()}>
          <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: this.props.rowData.image }}
            />
            <View styleName="vertical stretch space-between">
              <Title styleName="md-gutter-bottom">{this.props.rowData.title}</Title>
              <Text>{this.props.rowData.location}</Text>
            </View>
            <Button styleName="right-icon"><Icon name="add-event" /></Button>
          </Row>
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
