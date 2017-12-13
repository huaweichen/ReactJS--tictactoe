import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LeftNavbar from '../components/LeftNavbar'
import {Header, Main} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {

	render() {
		return (
				<MuiThemeProvider>
					<div>
						<LeftNavbar/>
						<Header>
							Tic Tac Toe
						</Header>
						<Main>
							{this.props.children}
						</Main>
					</div>
				</MuiThemeProvider>
		)
	}

}

export default Template
