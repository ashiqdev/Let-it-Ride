import {
  GET_CATEGORIES,
  GET_RESULTS,
  REGISTER_USER,
  SET_VEHICLE,
  SIGN_OUT,
} from './action/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [action.payload],
      };

    case GET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      };

    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
