import { fromJS, toJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    restaurants: fromJS([{
      "name": "Gaspar Brasserie",
      "address": "185 Sutter St, San Francisco, CA 94109",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
    }, {
      "name": "Chalk Point Kitchen",
      "address": "527 Broome St, New York, NY 10013",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
    }])
  };
}

function wrap(Component) {
  return function(props) {
    return <Component restaurants={props.restaurants.toJS()} />
  }
}

export const Missions = connect(mapStateToProps)(wrap(MissionsList));
