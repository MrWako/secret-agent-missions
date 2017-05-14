import { fromJS } from 'immutable';

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  }
}

// Initial state of the store
const initialState = fromJS([{
  "name": "Secret Fridge Mission",
  "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
  "id": 0
}, {
  "name": "Nature Base Mission",
  "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
  "id": 1
}])

export const missionSummary = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.set('counter', state.get('counter') + 1);
    case 'DECREMENT':
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
    }
}
