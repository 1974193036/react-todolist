import React, {Component, Fragment} from 'react'; // { Component } 为解构赋值，相当于const Component = react.Component
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleToggle() {
    /**CSSTransition：
     * show变为true时候激发fade-enter, fade-enter-active, fade-enter-done
     * show变为false时候激发fade-exit, fade-exit-active, fade-exit-done
     * 设置 appear={true}，绑定fade-appear, fade-appear-active，页面刚载入的时候也有动画效果
     * 最后在 style.css 内写这些样式
     */
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }

  handleAddItem() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }

  render() {
    // render函数内的标签，是jsx的语法，所以需引入react, 即import React from 'react';
    return (
      <Fragment>
        {/*<div className={this.state.show ? 'show' : 'hide'}>我是className控制显示/隐藏的css动画，见style.css</div>*/}

        {/*以下是针对单个div的CSSTransition动画*/}
        {/*<CSSTransition*/}
          {/*in={this.state.show}*/}
          {/*timeout={1000} // 动画时间*/}
          {/*classNames='fade'*/}
          {/*unmountOnExit // 移除dom元素*/}
          {/*onEntered={(el) => {el.style.color = 'blue'}} // 入场动画结束之后(fade-enter-done)，执行这个钩子函数*/}
          {/*appear={true} // 页面刚载入的时候也有动画效果，绑定fade-appear, fade-appear-active*/}
        {/*>*/}
          {/*<div>我是CSSTransition做的动画</div>*/}
        {/*</CSSTransition>*/}
        {/*<button onClick={this.handleToggle}>toggle</button>*/}


        {/*以下是针对多个div的TransitionGroup动画，配合CSSTransition*/}
        <TransitionGroup>
          {
            this.state.list.map((item, index)=>
              <CSSTransition
                timeout={1000}
                classNames='fade'
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
