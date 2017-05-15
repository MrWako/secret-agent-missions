import { fromJS } from 'immutable';

const ADD_MISSION_SUMMARY = 'ADD_MISSION_SUMMARY'

export const addMissionSummary = (id) => {
  return {
    type: ADD_MISSION_SUMMARY,
    id : id
  }
}

// Initial state of the store
const initialState = fromJS([{
  "title": "Secret Fridge Mission",
  "location": "At home",
  "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
  "id": 0
},{
  "title": "Nature base",
  "location": "Wales",
  "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
  "id": 0
}])

const fidgeMission = fromJS({
  "summary" : {
    "title": "Secret Fridge Mission",
    "location": "At home",
    "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
  },
  "clues" : [{
    "clue" : "Butter",
    "answer" : 0
  }, {
    "clue" : "Butter",
    "answer" : 0
  }]})

  const NatureBaseMission = fromJS({
    "summary" : {
      "title": "Nature Base Mission",
      "location": "Wales At home",
      "image": "https://shoutem.github.io/restaurants/restaurant-1.jpg",
    },
    "clues" : [{
      "clue" : "Chickens",
      "answer" : 0
    }, {
      "clue" : "Pigs",
      "answer" : 0
    }]})

const emptyState = {
  "title": "Title of mission",
  "location": "Location of mission",
  "image": "https://shoutem.github.io/restaurants/restaurant-2.jpg",
  "id": 2
}

export const missionSummary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION_SUMMARY:
      el = emptyState;
      el.id = action.id;
      return state.push(fromJS(el));
    default:
      return state;
    }
}
