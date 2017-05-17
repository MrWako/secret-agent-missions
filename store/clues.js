import { fromJS, List, Map } from 'immutable';

const ADD_CLUE = 'ADD_CLUE'

export const addClue = (id) => {
  return {
    type: ADD_CLUE,
    missionId: id
  }
}

// Initial state of the store
const fidgeClues = fromJS([{
    "info" : "First fridge additional info",
    "clue" : "First fridge question",
    "answer" : 0},{
    "info" : "Second fridge additional info",
    "clue" : "Second fridge question",
    "answer" : 0}])

const initialState = Map({"0": fidgeClues})

const emptyState = Map({
    "info" : "Info",
    "clue" : "Question",
    "answer" : 0})

export const clues = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLUE:
      if (!state.has(action.missionId)){
        return state.set(action.missionId, List([emptyState]))
      } else {
        return state.set(action.missionId, state.get(action.missionId).push(emptyState))
      }
    default:
      return state;
    }
}
