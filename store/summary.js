import { fromJS, OrderedMap } from 'immutable';

const ADD_SUMMARY = 'ADD_SUMMARY'

export const addSummary = (id) => {
  return {
    type: ADD_SUMMARY,
    id : id
  }
}

// Initial state of the store
const fidgeMission = fromJS({
    "title": "Secret Fridge Mission",
    "location": "At home",
    "info": "Some additional info",
    "image": "http://shoutem.github.io/img/ui-toolkit/examples/image-3.png",
    "id": "0"
  })

const initialState = OrderedMap({"0": fidgeMission})

const emptyState = {
  "title": "Title of mission",
  "location": "Location of mission",
  "info": "Some additional info",
  "image": "http://shoutem.github.io/img/ui-toolkit/examples/image-3.png",
  "id": 2
}

export const summary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUMMARY:
      el = emptyState;
      el.id = action.id;
      return state.set(action.id, fromJS(el));
    default:
      return state;
    }
}
