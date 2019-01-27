import {INIT_LIST_ACTION, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

// reducer，可以接收state，但是绝不能修改state，所以要深拷贝一下
// reducer是一个纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
// 副作用： state.inputValue = action.value，不能修改state
export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.inputValue = action.value
    // newState.inputValue = new Date() // 此时就不是一个纯函数了，输出不固定，或者有ajax，也不是纯函数
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
    // return {...state, list: [...state.list, state.inputValue], inputValue: ''}
  }

  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list.splice(action.index, 1)
    return newState
  }

  // 初始化列表
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list = action.data
    return newState
  }

  return state
}
