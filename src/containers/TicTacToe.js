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
	move = (index, marker) => {
		this.setState( (prevState, prop) => {
			let {gameState, yourTurn, gameOver, winner} = prevState
			// change turn
			yourTurn = !yourTurn
			// replace index with marker.
			gameState.splice(index, 1, marker)
			// check if there is a win
			let foundWin = this.winChecker(gameState)
			if (foundWin) {
				winner = gameState[foundWin[0]]
			}
			// find a win or no more square to play, then game over
			if (foundWin || !gameState.includes(false)) {
				gameOver = true
			}
			// AI start to move
			if (!gameOver && !yourTurn) {
				this.makeAiMove(gameState)
			}

			return {
				gameState,
				yourTurn,
				gameOver,
				win: foundWin || false,
				winner
			}
		})
	}

	/**
	 * Generate a random number between a given range.
	 * @param min
	 * @param max
	 * @returns {number}
	 */
	random = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max-min) + min)
	}

	/**
	 * Check whether or not someone win.
	 */
	winChecker = (gameState) => {
		let winCombos = this.winCombos;
		return winCombos.find((winCombo) => {
			let [a, b, c] = winCombo
			return (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
		})
	}

	/**
	 * AI makes a move.
	 */
	makeAiMove = (gameState) => {
		// AI needs to know its mark.
		let otherMark = this.state.otherMark
		let openSquares = []
		// Get the rest of available squares.
		gameState.forEach((square, index) => {
			if (!square) {
				openSquares.push(index)
			}
		})
		let aiMove = openSquares[this.random(0, openSquares.length)]
		// AI needs think.
		setTimeout(() => {
			this.move(aiMove, otherMark)
		}, 1000)
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
