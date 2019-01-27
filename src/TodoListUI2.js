/** 定义UI组件（傻瓜组件：只负责页面显示），只有一个render函数 */
/**
 * 定义无状态组件，函数的形式
 * 当一个组件只有render函数的时候，可以用无状态组件替换该组件
 * 无状态组件，只是一个函数，没有生命周期，性能高
 */

import React from 'react';
import 'antd/dist/antd.css';
import {Button, Input, List} from 'antd';

/** UI组件 */
// class TodoListUI2 extends Component {
//   render() {
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <Input
//           value={this.props.inputValue}
//           placeholder="todo info"
//           style={{width: '300px', marginRight: '10px'}}
//           onChange={this.props.handleInputChange}
//         />
//         <Button
//           type="primary"
//           onClick={this.props.handleBtnClick}
//         >提交</Button>
//         <List
//           style={{marginTop: '10px', width: '300px'}}
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

/** 无状态组件 */
const TodoListUI2 = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >提交</Button>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>)}
      />
    </div>
  )
}


export default TodoListUI2