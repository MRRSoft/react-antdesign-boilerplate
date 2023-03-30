import authReducer from "store/slices/auth.slice";
import useReducer from "store/slices/user.slice";
const reducer ={

  auth: authReducer,
  user: useReducer
 
};

export default reducer;
