import axios from 'axios'
import {GET_INIT_LIST, INIT_LIST_ACTION, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from './actionTypes';

// 创建统一action

// 初始化列表
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data: data
})

// 改变输入框的值
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

// 新增list
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

// 删除list中的一项
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index: index
})


/** redux-thunk中间件使用 */
// 获取初始化数据
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/list.json').then((res)=>{
//       const data = res.data
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }

/** redux-saga中间件使用 */
// 获取初始化数据
export const getInitList = () => ({
  type: GET_INIT_LIST
})