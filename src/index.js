import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import TodoList from './TodoList' // 讲解 不使用redux的基本方法
// import TodoList2 from './TodoList2' // 讲解 redux，react-thunk，react-saga


import TodoList3 from './TodoList3' // 讲解 react-redux
import {Provider} from 'react-redux'
import store from './store3/index'

const App = (
  <Provider store={store}>
    <TodoList3 />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root')); // <App />组件的写法，是jsx语法，需引入React，即import React from 'react'

