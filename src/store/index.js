/**
 * Created by John on 2017/2/28.
 */
import {createStore} from 'redux'
import reduxShape from 'redux-shape'
import demo from './reducers/demo'

let shape = {
    text:()=>demo,// a leaf should be returned inside a function.
}

let reducer = reduxShape({shape:shape})
let store = createStore(reducer)
export let dispatch = store.dispatch
export let getState =  store.getState
export default store