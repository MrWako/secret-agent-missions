import { fromJS } from 'immutable';

const ADD_MISSION_DETAIL = 'ADD_MISSION_DETAIL'

export const addMissionDetail = (id) => {
  return {
    type: ADD_MISSION_DETAIL,
    id : id
  }
}

const initialState = fromJS({
  "0": {
    "info" : "A secret mission to explore the fridge",
    "clues" : [{
        "question" : "First question",
        "answer" : 0},{
        "question" : "Second question",
        "answer" : 0}]}
})

export const missionDetail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION_DETAIL:
      return state
    default:
      return state;
    }
}
