
export const AuthTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
  };

// Initial state
const initialState = {
  islogin: false,
};

// Reducer function
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AuthTypes.LOGIN:
        return {
          ...state,
          islogin: true,
        };
      case AuthTypes.LOGOUT:
        return {
            ...state,
          islogin: false,
        };
      default:
        return state;
    }
  };

export default authReducer;