import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"


//启动控制台redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//第二个参数，是使用应用中间件。
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store;