import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Router} from 'react-router'
import Routes from './routes/index.js'

ReactDOM.render(
		<Router
				history={browserHistory}
				routes={Routes}
		/>,
		document.getElementById('root')
)
