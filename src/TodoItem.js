import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  // static propTypes = {
  //   content: PropTypes.string.isRequired
  // }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 当一个组件要从父组件接收参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  // componentWillReceiveProps() {
  //   console.log('child componentWillReceiveProps')
  // }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  // componentWillUnmount() {
  //   console.log('child componentWillUnmount')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.content)
    // console.log(this.props.content)
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  handleClick() {
    // alert(this.props.index)
    // this.props.deleteItem(this.props.index);

    const {deleteItem, index} = this.props;
    deleteItem(index); // 子组件内调用父组件的方法
  }

  render() {
    console.log('child render')
    const {content, test} = this.props;

    /**
     * JSX(数据 + 模版) -> 虚拟DOM(JS对象) -> 真实的DOM
     * return <div>hello</div>
     * 更接近底层的写法：return React.createElement('div', {}, 'hello')
     */

    return (
      <Fragment>
        <li onClick={this.handleClick}>{test} - {content}</li>
      </Fragment>
    )
  }
}

/**
 * 属性传递检测, 类型校验
 *
 * 属性有
 * array,
 * bool,
 * func,
 * number,
 * object,
 * string,
 * symbol,
 * node,
 * element,
 *
 * 可以组合使用
 * arrayOf：表示数组的组成内容，要么number, 要么string，
 * 如 PropTypes.arrayOf(PropTypes.number, PropTypes.string)
 *
 * oneOfType：表示以下内容中的一个，要么number, 要么string，
 * 如 PropTypes.oneOfType([PropTypes.number, PropTypes.string])
 * */
TodoItem.propTypes = {
  // test: PropTypes.string, // test 没传，不会检测, 不会报错
  test: PropTypes.string.isRequired, // 设置默认值，不会报错
  //  content: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

/** 如果父组件没有传递这个属性，可以设置默认值 */
TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem