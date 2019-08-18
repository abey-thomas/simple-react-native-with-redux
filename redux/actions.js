import { login } from "../Api";
//action_types
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const LOGIN_SENT = "LOGIN_SENT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

//action_creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update
});
export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
});
export const logInUser = (username, password) => dispatch => {
  dispatch({ type: LOGIN_SENT });
  login(username, password)
    .then(token => {
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_REJECTED, payload: err.message });
    });
};
