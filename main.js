import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  StatusBar
} from 'react-native';

import { Divider, ListView, Text, View, Image, Tile, Title, Subtitle, Screen} from '@shoutem/ui';

console.disableYellowBox = true;

class ListTest extends React.Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [{
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
      }, {
        "name": "Chalk Point Kitchen 2",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
      }],
    }
  }

  renderRow(restaurant) {
    return (
      <View>
        <Image
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
        >
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
          data={this.state.restaurants}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}

class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <Expo.AppLoading />;
    }

    return (
      <View style={{flex: 1}}>
        <ListTest/>
      </View>
    );
  }
}

Expo.registerRootComponent(App);
