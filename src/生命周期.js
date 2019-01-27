/**
 * 生命周期函数是指：在 某一个时刻 组件 自动调用执行的函数
 * 顺序：
 * Mounting：{
 *    componentWillMount：在组件即将被挂载到页面的时刻自动执行（第一次挂载被执行，只执行一次）
 *    render：模版渲染，render并不一定在此处，只要state或者props发生改变的时候，render就会出现
 *    componentDidMount：组件被挂载到页面之后，自动执行（第一次挂载被执行，只执行一次）
 * }
 * Updation： {
 *    componentWillReceiveProps：要满足2个条件
 *        1.当一个组件要从父组件接收参数
 *        2.只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
 *        即：如果这个组件第一次存在于父组件中，不会执行
             如果这个组件之前已经存在于父组件中，才会执行
 *    shouldComponentUpdate：组件被更新之前，他会自动被执行，要求返回布尔值，
 *    componentWillUpdate：组件被更新之前会自动执行，如果 shouldComponentUpdate 返回true，他才执行，如果返回false，不执行
 *    render：
 *    componentDidUpdate：组件更新完成之后才会执行
 * }
 * Unmounting：{
 *    componentWillUnmount：当这个组件即将被从页面中剔除的时候，会被执行
 * }
 *
 */