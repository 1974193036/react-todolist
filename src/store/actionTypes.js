// 创建 action 的 type 常量

export const GET_INIT_LIST = 'get_init_list'; // 针对 redux-saga 获取初始化数据
export const INIT_LIST_ACTION = 'init_list_action'; // 针对 【不使用中间件】或者 redux-thunk 获取初始化数据
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';