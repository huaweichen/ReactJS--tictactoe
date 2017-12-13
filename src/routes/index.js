import React from 'react'
import {IndexRoute, Route} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'

const createRoutes = () => {
	return (
			<Route path='/'
			       component={Template}
			>
				<IndexRoute
						component={TicTacToe}
				/>
				<Route
						path='/profile'
						component={Profile}
				/>
			</Route>
	)
}

const Routes = createRoutes()
export default Routes
