import React, {Component, Fragment} from 'react'; // { Component } 为解构赋值，相当于const Component = react.Component
import TodoItem from './TodoItem';
// import Test from './Test'
import axios from 'axios';
import './style.css';

/** Fragment 占位符，可以替代最外层div，可以让最外层去掉多余的div */

class TodoList extends Component {

  constructor(props) {
    super(props);
    /** 当组件的state或者props发生改变的时候，render函数就会重新执行 */
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 在组件即将被挂载到页面的时刻自动执行，再是render
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // 组件被挂载到页面之后，自动执行
  componentDidMount() {
    // console.log('componentDidMount')
    axios.get('/api/todolist').then((res) => {
      console.log('success')
    }).catch(() => {
      console.log('error')
      let mockData = ['Lee', 'ttt']
      this.setState(() => ({
        list: [...mockData]
      }))
    })
  }

  // 组件被更新之前，他会自动被执行
  // 要求返回布尔值
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }

  // 组件被更新之前会自动执行，但是他在shouldComponentUpdate之后执行
  // 如果 shouldComponentUpdate 返回true，他才执行，如果返回false，不执行
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // 组件更新完成之后才会执行
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // 设置输入框的值
  handleInputChange(e) {
    /** 获取dom元素：
     * 1. e.target
     * 2. 绑定 ref 属性，(新版react写法)
     *  ref={(input) => {this.input = input}}
     *  this.input 即为input元素
     *
     * 3. 或者 ref="myInput"，this.refs.myInput 即为input元素
     *
     * ref 和 setState 一起使用，会出现setState异步获取不到dom元素
     *
     */
    // console.log(e.target)
    // console.log(this.input)
    // console.log(this.refs.myInput)

    // console.log(this); // 不绑定this会输出 undefined
    // this.setState({
    //   inputValue: e.target.value
    // })
    /** 新版react推荐写法, 函数写法（setState是异步的形式）
     *  函数写法（异步的形式）时候，先在外层保存 e.target.value
     *  函数写法有一个参数 prevState，等价于修改数据之前的那一次数据（this.state）
     */
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  // 点击按钮新增list事件
  handleBtnClick() {
    // console.log(this.state.inputValue)
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      // list: [...this.state.list, this.state.inputValue],
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      /** setState是异步，setState完成之后才能获取对应的dom节点 */
      // console.log(this.ul.querySelectorAll('li').length)
    })
  }

  // 点击列表删除事件
  handleItemDelete(index) {
    // console.log(index)
    // const list = [...this.state.list]; // 对 this.state.list 进行深拷贝
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list: list
      }
    })

    /**
     * 不建议如下方法
     * immutable, state不允许我们做任何的改变
     * this.state.list.splice(index, 1) 这个写法，
     * 直接操作修改了state里面的数据了，还需 setState？？？
     * 所以要改变state里面的数据，最好是用 setState 方法
     * */
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list:  this.state.list
    // })
  }

  /**
   * 注释有两种方法，都需要带 {}
   * dangerouslySetInnerHTML 不希望自动被转译，用了dangerouslySetInnerHTML就无需写 {item} 了
   * */

  /**
   * 点击label使得输入框聚焦：
   * input上加 id，label内加 for = 这个id
   * 但是react会把 for 误认为是循环而报错，所以 for 写成 htmlFor
   * */

  // 封装列表的方法
  getTodoItem() {
    return this.state.list.map((item, index) =>
      <TodoItem
        key={item}
        content={item}
        index={index}
        deleteItem={this.handleItemDelete}
      />
    )
  }


  render() {
    console.log('render')
    // render函数内的标签，是jsx的语法，所以需引入react, 即import React from 'react';
    return (
      <Fragment>
        {/*下面是一个输入框*/}
        <label htmlFor="insertArea">输入内容（点击这里光标自动聚焦到输入框）</label>
        <input
          style={{border: "1px solid red"}}
          className="input"
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => {
            this.input = input
          }}
          // ref="myInput"
        />
        {
          // 下面是一个按钮
          // dangerouslySetInnerHTML 不希望自动被转译，如输入<h1>hello</h1>，会输出带h1性质的大的hello
        }
        <button onClick={this.handleBtnClick}>提交</button>
        <ul ref={(ul) => {
          this.ul = ul
        }}>
          {/*{this.state.list.map((item, index) =>*/}
          {/*<TodoItem*/}
          {/*content={item}*/}
          {/*index={index}*/}
          {/*deleteItem={this.handleItemDelete}*/}
          {/*/>*/}
          {/*)}*/}
          {this.getTodoItem()}
        </ul>
        {/*<li
              key={index}
              onClick={this.handleItemDelete.bind(this, index)}
              dangerouslySetInnerHTML={{__html: item}}
            >
            {item}
            </li>*/}
        {/*<Test content={this.state.inputValue}/>*/}
      </Fragment>
    );
  }
}

export default TodoList;