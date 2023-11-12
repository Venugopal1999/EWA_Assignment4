export const initialRegisterState = [];
export const RegisterTypes = {
    ADD_REGISTRATION: 'ADD_REGISTRATION',
    CLEAR: 'CLEAR',
  };
  
  export const registerReducer = (state= initialRegisterState, action) => {
    switch (action.type) {
      case RegisterTypes.ADD_REGISTRATION:
        console.log("register",action);
        return [...state, action.registration]; // Add a new registration to the array
  
      case RegisterTypes.CLEAR:
        return []; // Clear the array of registrations
  
      default:
        return state; // Return the current state for unknown action types
    }
  };
  