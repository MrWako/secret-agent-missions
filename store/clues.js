import { fromJS, List, Map } from 'immutable';

const ADD_CLUE = 'ADD_CLUE'
const SET_CLUE_INFO = 'SET_CLUE_INFO'
const SET_CLUE_CLUE = 'SET_CLUE_CLUE'
const SET_CLUE_ANSWER = 'SET_CLUE_ANSWER'

export const addClue = (id) => {
  return {
    type: ADD_CLUE,
    missionId: id
  }
}

export const setClueInfo = (id, index, text) => {
  return {
    type: SET_CLUE_INFO,
    missionId: id,
    clueIndex: index,
    info: text
  }
}

export const setClueClue = (id, index, text) => {
  return {
    type: SET_CLUE_CLUE,
    missionId: id,
    clueIndex: index,
    clue: text
  }
}

export const SetClueAnswer = (id, index, text) => {
  return {
    type: SET_CLUE_ANSWER,
    missionId: id,
    clueIndex: index,
    answer: text
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
    case SET_CLUE_INFO:
      console.log(action.info)
      console.log(action.missionId)
      console.log(action.clueIndex)
      console.log(state)
      new_state = state.setIn([action.missionId, action.clueIndex, "info"], action.info)
      console.log(new_state)
      return state.setIn([action.missionId, action.clueIndex, "info"], action.info)
    case SET_CLUE_CLUE:
      return state.setIn([action.missionId, action.clueIndex, "clue"], action.clue)
    case SET_CLUE_ANSWER:
      return state.setIn([action.missionId, action.clueIndex, "answer"], action.answer)
    default:
      return state;
    }
}
