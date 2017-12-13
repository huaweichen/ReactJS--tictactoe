import React from 'react'
import {Layer, Line, Text} from 'react-konva'

export const Board = ({unit, size, rows}) => {
	let grid = [];
	let stroke = 'grey'
	let strokeWidth = 10

	// Create four lines in the board.
	for (let i = 1; i < rows; i++) {
		let position = unit * i
		// Draw vertical.
		grid.push(
			<Line
					points={[position, 0, position, size]}
					stroke={stroke}
					strokeWidth={strokeWidth}
					key={i + 'v'}
			/>
		)
		// Draw horizontal.
		grid.push(
			<Line
					points={[0, position, size, position]}
					stroke={stroke}
					strokeWidth={strokeWidth}
					key={i + 'h'}
			/>
		)
	}

	return (
			<Layer>
				{grid}
			</Layer>
	)
}

export const Square = ({unit, coordinates, gameState, win, gameOver, yourTurn, ownMark, move}) => {
	let squares = coordinates.map((position, index) => {
		let makeMove = move
		let mark = gameState[index]
		let fill = 'black'
		// Highlight fills in light green color.
		if (win && win.includes(index)) {
			fill = 'lightgreen'
		}
		// User can't move if game is over, or it is not his turn, or the fill
		// has been already marked.
		if (!yourTurn || gameOver || mark) {
			makeMove = () => console.log('nope!')
		}

		return (
				<Text
						key={index}
						index={index}
						x={position[0]}
						y={position[1]}
						fontSize={unit}
						width={unit}
						text={mark}
						fontFamily={'Helvetica'}
						align={'center'}
						onClick={(event) => {
							let index = event.target.index
							makeMove(index, ownMark)
						}}
						fill={fill}
				>
				</Text>
		)
	})

	return (
			<Layer>
				{squares}
			</Layer>
	)
}
