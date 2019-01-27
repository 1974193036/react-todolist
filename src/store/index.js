import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import todoSagas from './saga'

import reducer from './reducer'

/**
 * thunk（解决异步问题），__REDUX_DEVTOOLS_EXTENSION_COMPOSE__，是 redux 的中间件
 * redux-sage 也是一个中间件，解决异步问题
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeEnhancers(
  // applyMiddleware(thunk) // 使用 redux-thunk 中间件
  applyMiddleware(sagaMiddleware) // 使用 redux-saga 中间件
))

sagaMiddleware.run(todoSagas)

export default store