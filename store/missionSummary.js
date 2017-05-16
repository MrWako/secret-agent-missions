import { fromJS, OrderedMap } from 'immutable';

const ADD_MISSION_SUMMARY = 'ADD_MISSION_SUMMARY'

export const addMissionSummary = (id) => {
  return {
    type: ADD_MISSION_SUMMARY,
    id : id
  }
}

// Initial state of the store
const fidgeMission = fromJS({
    "title": "Secret Fridge Mission",
    "location": "At home",
    "info": "Some additional info",
    "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
    "id": 0
  })

const natureBaseMission = fromJS({
    "title": "Nature Base Mission",
    "location": "Wales At home",
    "info": "Some additional info",
    "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
    "id": 1
  })

const initialState = OrderedMap({"0": fidgeMission, "1": natureBaseMission})

const emptyState = {
  "title": "Title of mission",
  "location": "Location of mission",
  "info": "Some additional info",
  "image": "https://shoutem.github.io/restaurants/restaurant-2.jpg",
  "id": 2
}

export const missionSummary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION_SUMMARY:
      el = emptyState;
      el.id = action.id;
      return state.set(action.id, fromJS(el));
    default:
      return state;
    }
}
