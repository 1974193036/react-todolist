/** store3：处理 react-redux */


import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store

