/**
 * 渲染过程：
 * 方案1：
 * 1.state数据
 * 2.JSX模版
 * 3.数据 + 模版 结合，生成真实的DOM，来显示
 * 4.state 发生改变
 * 5.数据 + 模版 结合，生成真实的DOM，替换原始的DOM
 *
 * 方案1缺陷：
 * 第一次生成了一个完整的DOM片段
 * 第二次又生成了一个完整的DOM片段
 * 第二次的DOM替换了第一次的DOM，非常耗性能
 *
 * 改进：
 * 方案2：
 * 1.state数据
 * 2.JSX模版
 * 3.数据 + 模版 结合，生成真实的DOM，来显示
 * 4.state 发生改变
 * 5.数据 + 模版 结合，生成真实的DOM，并不直接替换原始的DOM
 * 6.新的DOM(DocumentFragment) 和 原始的DOM 做对比，找差异
 * 7.找出只有input框发生了变化
 * 8.只用 新的DOM 中的input元素，替换掉 老的DOM 中的input元素
 *
 * 方案2缺陷：
 * 性能提升并不明显
 *
 * 再次改进：
 * 方案3：
 * 1.state数据
 * 2.JSX模版
 * 3.数据 + 模版，生成虚拟DOM(虚拟DOM就是一个js对象，用它来描述真实DOM)(损耗了性能，极小)
 * 虚拟DOM：
 * ['div', {id: 'abc'}, ['span', {}, 'hello world']]
 *
 * 4.用 虚拟DOM结构 生成真实的DOM，来显示
 * 真实DOM：<div id="abc"><span>hello world</span></div>
 *
 * 5.state 发生变化
 * 6.数据 + 模版，生成 新的虚拟DOM(生成虚拟DOM的性能损耗极小，生成真实DOM的性能损耗很大)，
 * ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
 *
 * 7.比较 原始虚拟DOM 和 新的虚拟DOM 的区别，找到区别是span中的内容（js对象对比，极大的提升性能）
 * diff（difference）算法，提高两个虚拟DOM之间的比对效率
 *
 * 8.直接操作DOM，改变span中的内容
 *
 * 虚拟DOM优点：
 * 1.性能提升
 * 2.跨端应用得以实现，React Native, js对象在原生应用里可以被识别，把虚拟DOM生成原生的组件
 */


/**
 * diff算法：1.同层比对，2.key值比对
 * 循环的时候引入key值，提高虚拟DOM比对性能
 * index最好不要做key值，index不稳定
 */