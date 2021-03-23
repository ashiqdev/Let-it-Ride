import {
  GET_CATEGORIES,
  GET_RESULTS,
  REGISTER_USER,
  SET_VEHICLE,
  SIGN_OUT,
} from './actionTypes';

export const getResultsAction = (results) => {
  console.log({ ashik: results });
  return {
    type: GET_RESULTS,
    payload: results,
  };
};

export const getCategoriesAction = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};

export const setVehicleAction = (vehicle) => {
  return {
    type: SET_VEHICLE,
    payload: vehicle,
  };
};

export const registerUserAction = (user) => {
  console.log({ reducer: user });
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const SignoutAction = () => {
  return {
    type: SIGN_OUT,
  };
};
