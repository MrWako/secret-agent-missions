import { connect } from 'react-redux'

import { MissionsList } from '../components/MissionsList.js';

// this is where we should convert state to props
function mapStateToProps(state) {
  return {
    restaurants: [{
      "name": "Gaspar Brasserie",
      "address": "185 Sutter St, San Francisco, CA 94109",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
    }, {
      "name": "Chalk Point Kitchen",
      "address": "527 Broome St, New York, NY 10013",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
    }]
  };
}

export const Missions = connect(mapStateToProps)(MissionsList);
