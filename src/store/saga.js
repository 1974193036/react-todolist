import axios from 'axios'
import {put, takeEvery} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators'

function* getInitList() {
  // axios.get('/list.json').then((res)=>{
  //   const data = res.data
  //   const action = initListAction(data)
  //   put(action)
  // })
  // yield 表示执行完毕之后再往下面执行
  try {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log('list.json 网络请求失败')
  }
}


// es6 generator函数
function* mySaga() {
  /** 捕获每一次派发出的action，当action的type等于 GET_INIT_LIST，就执行 getInitList 函数 */
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;