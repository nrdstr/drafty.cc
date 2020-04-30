import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { StateProvider, initialState } from "./state"
import { rootReducer } from "./reducers"
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<StateProvider initialState={initialState} reducer={rootReducer}><App /></StateProvider>, document.getElementById('root'))
serviceWorker.unregister()
