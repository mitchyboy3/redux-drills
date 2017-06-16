const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const UPDATE_GUEST = 'UPDATE_GUEST';

const initialState = ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'];

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function updateGuest(name, i) {
  return {
    type: UPDATE_GUEST,
    payload: {
      name: name,
      index: i,
    }
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return [...state, action.payload];
    case REMOVE_GUEST:
      return state.filter( (guest, i) => i !== action.payload );
    case UPDATE_GUEST:
      return state.map((guest, i)=>{
        if(i === action.payload.index) {
          return action.payload.name;
        } 
        else {
          return guest;
        }
      })
    default:
      return state;
  }
}
