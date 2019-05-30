import * as thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";

const middleware = composeWithDevTools(applyMiddleware(thunk.default));

export default createStore(rootReducer, middleware);