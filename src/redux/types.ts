// types.ts

// Define the User type based on your user data structure
export interface User {
    id: string;
    username: string;
    email: string;
    role: {
      title: string;
    };
  }
  
  // Define the state type
  export interface UserState {
    user: User | null;
  }
  
  // Define action types
  export const SET_USER = 'SET_USER';
  
  interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
  }
  
  // Use this type in reducers for user-related actions
  export type UserActionTypes = SetUserAction;
  