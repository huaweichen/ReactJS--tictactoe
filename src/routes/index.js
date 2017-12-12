import React from 'react'
import {IndexRoute, Route} from 'react-router'
import Template from '../components/Template'
import Home from '../components/Home'
import Profile from '../components/Profile'

const createRoutes = () => {
	return (
			<Route path='/'
			       component={Template}
			>
				<IndexRoute
						component={Home}
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
