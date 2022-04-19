import { createStore } from "redux";
import rootReducer from "../reducers"
import { composeWithDevTools } from '@redux-devtools/extension';

const store =createStore(rootReducer,
  
  composeWithDevTools(
    // applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
export default store;
