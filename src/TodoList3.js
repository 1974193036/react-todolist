/** TodoList3：处理 react-redux */


import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

// class TodoList3 extends Component {
//   render() {
//     const {inputValue, list, changeInputValue, handleBtnClick, handleDelete} = this.props
//     // inputValue 即为 this.props.inputValue
//     return (
//       <Fragment>
//         <div>
//           <input
//             value={inputValue}
//             onChange={changeInputValue}
//           />
//           <button onClick={handleBtnClick}>提交</button>
//         </div>
//         <ul>
//           {list.map((item, index) => <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>)}
//         </ul>
//       </Fragment>
//     )
//   }
// }

/** 只有 render函数 写成无状态组件 */
const TodoList3 = (props) => {
  const {inputValue, list, changeInputValue, handleBtnClick, handleDelete} = props
  return (
    <Fragment>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>)}
      </ul>
    </Fragment>
  )
}

// 映射关系
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index: index
      }
      dispatch(action)
    }
  }
}

// TodoList3 和 store 做连接
// store 的数据映射到 TodoList3 的属性（props）内
// connect 相当于把 TodoList3 这个UI组件变成了容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList3)