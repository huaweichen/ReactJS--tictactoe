import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from "../styled/Profile"

class Profile extends Component {

	static defaultProps = {
		user: {
			email: 'USER_EMAIL',
			games: [
				{
					winner: true,
					createdAt: '12/12/2017',
					id: '001'
				},
				{
					winner: true,
					createdAt: '12/12/2017',
					id: '002'
				},
				{
					winner: false,
					createdAt: '12/12/2017',
					id: '003'
				},
				{
					winner: false,
					createdAt: '12/12/2017',
					id: '004'
				},
				{
					winner: true,
					createdAt: '12/12/2017',
					id: '005'
				}
			]
		}
	}

	get records() {
		return this.props.user.games.map((game, index) => {
			return (
				<GameRecord
					key={index}
					index={game.id}
				>
					<Column>
						{(game.winner) ? 'Won!' : 'Lost...'}
					</Column>
					<Column>
						"AI Player"
					</Column>
					<Column>
						"Correct!"
					</Column>
					<Column>
						{game.createdAt}
					</Column>
				</GameRecord>
			)
		})
	}

	render() {
		let {
			email,
			games
		} = this.props.user
		return (
				<Container>
					<Name>
						{email}
					</Name>
					<GameList>
						<GameListHeader>
							MyGames
						</GameListHeader>
						<ColumnLabels>
							<Column>
								Outcome
							</Column>
							<Column>
								Guess
							</Column>
							<Column>
								Guessed Correctly
							</Column>
							<Column>
								Date
							</Column>
						</ColumnLabels>
						{this.records}
					</GameList>
				</Container>
		)
	}

}

export default Profile
