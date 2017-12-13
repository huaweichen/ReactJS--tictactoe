import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Square} from '../styled/TicTacToe'

class TicTacToe extends Component {

	constructor(props) {
		super(props)
		// List out all possibilities of wins.
		this.winCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 8],
		];
	}

	state = {
		rows: 3,
		gameState: new Array(9).fill(false),
		ownMark: 'X',
		otherMark: 'O',
		gameOver: false,
		yourTurn: true,
		winner: false,
		win: false
	}

	/**
	 * When my component mounts.
	 */
	componentWillMount() {
		let height = window.innerHeight
		let width = window.innerWidth
		let size = (height < width) ? height * .8 : width * .8
		let rows = this.state.rows
		let unit = size / rows

		let coordinates = [];
		// Build coordinates
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < rows; x++) {
				coordinates.push([x*unit, y*unit])
			}
		}

		this.setState({
			size,
			rows,
			unit,
			coordinates
		})
	}

	/**
	 * Human makes a move.
	 */
	move = (marker, index) => {
		console.log('move made', marker, index)
	}

	winChecker = () => {

	}

	/**
	 * AI makes a move.
	 */
	aiMove = () => {

	}

	/**
	 * Ask player play against AI or Human.
	 */
	ToeTest = () => {

	}

	/**
	 * Record the game.
	 */
	recordGame = () => {

	}



	render() {
		let {
			size,
			unit,
			rows,
			coordinates,
			gameState,
			win,
			gameOver,
			yourTurn,
			ownMark
		} = this.state

		return (
			<div>
				<Stage
					height={size}
					width={size}
				>
					{/* Board: game board */}
					<Board
						unit={unit}
						rows={rows}
						size={size}
					/>
					{/* Square: board's square */}
					<Square
						unit={unit}
						coordinates={coordinates}
						gameState={gameState}
						win={win}
						gameOver={gameOver}
						yourTurn={yourTurn}
						ownMark={ownMark}
						move={this.move}
					/>
				</Stage>
			</div>
		)
	}

}

export default TicTacToe
