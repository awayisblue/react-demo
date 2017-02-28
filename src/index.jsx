/**
 * Created by John on 2017/2/28.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Loader from './components/Loader'
render(
    <Provider store={store}>
        <Loader />
    </Provider>,
    document.getElementById('root')
)