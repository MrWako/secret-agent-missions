import { fromJS, Map } from 'immutable';

const ADD_CLUE = 'ADD_CLUE'

export const addClue = (id) => {
  return {
    type: ADD_CLUE,
    id: id
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

const natureBaseClues = fromJS([{
    "info" : "First NatureBase additional info",
    "clue" : "First NatureBase question",
    "answer" : 0},{
    "info" : "Second NatureBase additional info",
    "clue" : "Second NatureBase question",
    "answer" : 0}])

const initialState = Map({"0": fidgeClues, "1": natureBaseClues})

const emptyState = fromJS([{
    "info" : "First info",
    "clue" : "First question",
    "answer" : 0}])

export const missionClues = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLUE:
      return state
    default:
      return state;
    }
}
