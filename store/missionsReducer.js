import Immutable from 'immutable';

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
const initialState = Immutable.Map({ missions: undefined });

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.set('counter', state.get('counter') + 1);
    case 'DECREMENT':
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
    }
}
