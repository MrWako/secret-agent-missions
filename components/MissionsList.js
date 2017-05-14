import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';

/*
class MissionsListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <TouchableOpacity>
        <Image
          styleName="large-banner"
          source={{ uri: rowData.image.url }}>
          <Tile>
            <Title styleName="md-gutter-bottom">{rowData.name}</Title>
          </Tile>
        </Image>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }
}
*/

class MissionsListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onPress()}>
        <Image
          styleName="large-banner"
          source={{ uri: this.props.rowData.image.url }}>
          <Tile>
            <Title styleName="md-gutter-bottom">{this.props.rowData.name}</Title>
          </Tile>
        </Image>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }
}

export class MissionsList extends React.PureComponent {

  render() {
    return (
      <Screen>
        <ListView
          data={this.props.missions}
          renderRow={(rowData, sectionID, rowID) =>
              <MissionsListItem rowData={rowData}
               onPress={() => {}}/>
          }/>
          <Text onPress={() => this.props.navigation.navigate('Frontpage')}>Home</Text>
      </Screen>
    );
  }
}
