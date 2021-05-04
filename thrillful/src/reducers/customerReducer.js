// import {
//     CUSTOMER_LOGIN_FAIL,
//     CUSTOMER_LOGIN_REQUEST,
//     CUSTOMER_LOGIN_SUCCESS,
//     CUSTOMER_LOGOUT,
//   } from '../constants/customerConstants';
//   export const customerLoginReducer = (state = {}, action) => {
//     switch (action.type) {
//       case  CUSTOMER_LOGIN_REQUEST:
//         return { loading: true };
//       case  CUSTOMER_LOGIN_SUCCESS:
//         return { loading: false, customerInfo: action.payload };
//       case CUSTOMER_LOGIN_FAIL:
//         return { loading: false, error: action.payload };
//       case CUSTOMER_LOGOUT:
//         return {};
//       default:
//         return state;
//     }
//   };