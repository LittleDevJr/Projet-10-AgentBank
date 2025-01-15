// redux/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case 'SIGNUP_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      case 'FETCH_USER_PROFILE_SUCCESS':
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case 'FETCH_USER_PROFILE_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default authReducer;
  