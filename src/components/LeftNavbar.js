import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {NavToggleButton} from '../styled/NavDrawer'

class LeftNavbar extends Component {

	constructor(props) {
		super(props)
		this.state = {
			open: false,
			width: 250
		}
	}

	toggle = () => {
		this.setState((previousState, props) => {
			return {
				open: !previousState.open
			}
		})
	}

	render() {
		return (
			<div>
				<NavToggleButton
					toggle={this.toggle}
					width={this.state.width}
					open={this.state.open}
				/>
				<Drawer
					open={this.state.open}
					width={this.state.width}
				>
					<div style={{
						height: '200px',
						width: 'auto',
						backgroundColor: '#828282',
					}}>
						Login Panel Stub
					</div>
					<Link to={'/'}>
						<MenuItem
								primaryText={'Start'}
								onClick={this.toggle}
						/>
					</Link>
					<Divider/>
					<Link to={'/profile'}>
						<MenuItem
								primaryText={'Profile'}
								onClick={this.toggle}
						/>
					</Link>
				</Drawer>
			</div>
		)
	}

}

export default LeftNavbar
