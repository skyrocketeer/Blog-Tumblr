import * as types from '../constants/ActionTypes';
import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const API_URI = isProduction? process.env.HOST : process.env.REACT_APP_API;

export const fetchUserInfo = id => dispatch => {
  axios.get(`${API_URI}/api/user/${id}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: types.FETCH_USER_INFO,
        payload: res
      })
    })
}