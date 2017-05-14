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

const initialState = fromJS({
  "0": {
    "info" : "A secret mission to explore the fridge",
    "clues" : [{
        "question" : "First question",
        "answer" : 0},{
        "question" : "Second question",
        "answer" : 0}]},
  "1": {
    "info" : "A secret mission to explore the Nature Base",
    "clues" : [{
        "question" : "NB First question",
        "answer" : 0},{
        "question" : "NB Second question",
        "answer" : 0}]}
})

export const missionDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.set('counter', state.get('counter') + 1);
    case 'DECREMENT':
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
    }
}
