import React from 'react';
import { Divider, ListView, Text, View, Image, Tile, Title, Subtitle, Screen} from '@shoutem/ui';

export class MissionsList extends React.Component {

  // this should only be in terms of props
  renderRow = (restaurant) => {
    return (
      <View>
        <Image
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}>
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </Image>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    return (
      <Screen>
        <ListView
          data={this.props.restaurants}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}
