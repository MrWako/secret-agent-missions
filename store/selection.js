import { fromJS } from 'immutable';

const SET_MISSION_ID = 'SET_MISSION_ID'
const RESET_CLUE_INDEX = 'RESET_CLUE_INDEX'
const INCREMENT_CLUE_INDEX = 'RESET_CLUE_INDEX'

export const selectMission = (id) => {
  return {
    type: SELECT_MISSION,
    id : id
  }
}

export const resetClueIndex = (id) => {
  return {
    type: RESET_CLUE_INDEX,
    id : id
  }
}

export const incrementClueIndex = (id) => {
  return {
    type: INCREMENT_CLUE_INDEX,
    id : id
  }
}

// Initial state of the store
const initialState = fromJS({
  "id": "1",
  "index": 0
})

export const selection = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSION_ID:
      return state.set('id', action.id);
    case RESET_CLUE_INDEX:
      return state.set('index', 0);
    case INCREMENT_CLUE_INDEX:
      return state.set('index', state.get('index') + 1);
    default:
      return state;
    }
}
