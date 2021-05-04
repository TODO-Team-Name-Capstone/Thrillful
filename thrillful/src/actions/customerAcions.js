// import Axios from 'axios';
// import {
//   CUSTOMER_LOGIN_FAIL,
//   CUSTOMER_LOGIN_REQUEST,
//   CUSTOMER_LOGIN_SUCCESS,
//   CUSTOMER_LOGOUT,
// } from '../constants/customerConstants';

// export const signin = (email, password) => async (dispatch) => {
//   dispatch({ type: CUSTOMER_LOGIN_REQUEST, payload: { email, password } });
//   try {
//     const { data } = await Axios.post('/api/Customers/Login', { email, password });
//     dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: data });
//     localStorage.setItem('customerInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: CUSTOMER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const signout = () => (dispatch) => {
//   localStorage.removeItem('customerInfo');
//   localStorage.removeItem('cartItems');
//   dispatch({ type: CUSTOMER_LOGOUT });
};