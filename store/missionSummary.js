import { fromJS } from 'immutable';

const ADD_MISSION_SUMMARY = 'ADD_MISSION_SUMMARY'

export const addMissionSummary = () => {
  return {
    type: ADD_MISSION_SUMMARY
  }
}

// Initial state of the store
const initialState = fromJS([{
  "title": "Secret Fridge Mission",
  "location": "At home",
  "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
  "id": 0
}, {
  "title": "Nature Base Mission",
  "location": "Nature Base",
  "image": "https://shoutem.github.io/restaurants/restaurant-2.jpg",
  "id": 1
}])

const emptyState = fromJS({
  "title": "Title of mission",
  "location": "Location of mission",
  "image": "https://shoutem.github.io/restaurants/restaurant-2.jpg",
  "id": 2
})

export const missionSummary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION_SUMMARY:
      return state.push(emptyState);
    default:
      return state;
    }
}
