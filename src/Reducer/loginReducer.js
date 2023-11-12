export const initialLoginState = [];

export const LoginTypes = {
    ADD_LOGIN: 'ADD_LOGIN',
    CLEAR: 'CLEAR',
  };
  
  export const loginReducer = (state= initialLoginState, action) => {
    switch (action.type) {
      case LoginTypes.ADD_LOGIN:
        console.log("login",action);
        return [...state, action.loginDetails]; // Add a new login to the array
  
      case LoginTypes.CLEAR:
        return []; // Clear the array of logins
  
      default:
        return state; // Return the current state for unknown action types
    }
  };
  
// export const LoginTypes = {
//     ADD_LOGIN: 'ADD_LOGIN',
//     CLEAR: 'CLEAR',
//   };

// //   export const loginReducer = (state = initialLoginState, action) => {
// //     switch (action.type) {
// //       case LoginTypes.ADD_LOGIN:
// //         console.log("login", action);
// //         const newLogin = Array.isArray(action.loginDetails) ? action.loginDetails : [action.loginDetails];
// //         return [...state, ...newLogin]; // Add a new login to the array
  
// //       case LoginTypes.CLEAR:
// //         return []; // Clear the array of logins
  
// //       default:
// //         return state; // Return the current state for unknown action types
// //     }
// //   };
  
// export const createLoginDetails = (loginDetails) => ({
//     type: LoginTypes.ADD_LOGIN,
//     ...loginDetails,
//   });
  
//   export const loginReducer = (state= initialLoginState, action) => {
//     switch (action.type) {
//       case LoginTypes.ADD_LOGIN:
//         console.log("login details1111",action);
//         return [...state, action.loginDetails]; // Add a new login to the array
  
//       case LoginTypes.CLEAR:
//         return []; // Clear the array of logins
  
//       default:
//         return state; // Return the current state for unknown action types
//     }
//   };

// // export const loginReducer = (state = initialLoginState, action) => {
// //     switch (action.type) {
// //       case LoginTypes.ADD_LOGIN:
// //         console.log("login", action);
// //         const newLogin = Array.isArray(action.loginDetails) ? action.loginDetails : [action.loginDetails];
// //         return [...state, ...newLogin]; // Add a new login to the array
  
// //       case LoginTypes.CLEAR:
// //         return []; // Clear the array of logins
  
// //       default:
// //         return Array.isArray(state) ? state : []; // Ensure that state is an iterable array
// //     }
// //   };
  