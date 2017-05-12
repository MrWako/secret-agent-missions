import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';

export class MissionsList extends React.PureComponent {

  // this should only be in terms of props
  renderRow = (mission) => {
    return (
      <View>
        <TouchableOpacity>
        <Image
          styleName="large-banner"
          source={{ uri: mission.image.url }}>
          <Tile>
            <Title styleName="md-gutter-bottom">{mission.name}</Title>
          </Tile>
        </Image>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    return (
      <Screen>
        <ListView
          data={this.props.missions}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}
