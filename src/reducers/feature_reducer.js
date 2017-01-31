import { ACTION1 } from '../actions/types';

const INITIAL_STATE = {
  greeting: ['This msg from state']
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION1:
      return [...state, action.payload];
    default:
      return state;
  }
}
