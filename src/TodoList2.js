/** 定义容器组件（聪明组件：关注业务逻辑，功能实现） */

import React, {Component} from 'react';

import TodoListUI2 from './TodoListUI2';

import store from './store/index';
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';



class TodoList2 extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange); // 使页面发生数据的改变
  }

  // 初始化列表数据
  // 建议放在 action 内
  componentDidMount() {
    /** 不使用中间件 */
    // axios.get('/list.json').then((res)=>{
    //   const data = res.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
    // })

    /** redux-thunk中间件使用，把异步代码放到 action 内处理 */
    // const action = getTodoList() // action 是一个函数
    // store.dispatch(action) // 参数为一个函数（redux-thunk中间件可以使用函数当作参数），执行store.dispatch后，action这个函数根据中间件机制会被自动执行

    /** 使用 redux-saga 中间件，派发 action 之后，就去saga.js处理 */
    const action = getInitList()
    store.dispatch(action)
  }


  // 输入框的 onChange 事件
  handleInputChange(e) {
    // console.log(e.target.value);
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 点击提交按钮
  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  // 删除每一项操作
  handleItemDelete(index) {
    // console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index: index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  // 页面上的输入框显示输入的数值
  // 从store里面重新取一次数据
  // 再利用 setState 替换掉当前组件内的数据
  handleStoreChange() {
    // console.log('store change');
    this.setState(store.getState());
  }

  render() {
    return (
      <TodoListUI2
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
}

export default TodoList2