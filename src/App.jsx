import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Display from './components/Display/Display.jsx';
import Controls from './components/Controls/Controls.jsx';
import './App.scss';

function App() {
	
	const [display, setDisplay] = useState('0');
	const [input, setInput] = useState('');
	const [operator, setOperator] = useState('');
	const [inputTwo, setInputTwo] = useState('');
	
	// rounding algorithm to deal with floating point numbers
	function rounder(num) {
		return Math.round(num * 1000000)/1000000
	}

	// handles number buttons
	const handleNumber = (number) => {
		// check if user is inputting second number
		if (input && operator) {
			// ensure only one decimal allowed
			if (inputTwo.includes('.') && number === '.') {
				return;
			}

			if (inputTwo.length > 0) {
				setDisplay(prevDisplay => prevDisplay + number)
				setInputTwo(prevNumber => prevNumber + number)
				return;
			}
			setDisplay(number);
			setInputTwo(prevNumber => prevNumber + number);
			return;
		}
		
		// ensure only one decimal allowed
		if (number === '.' && display.includes('.')) {
			return;
		}

		if (display === '0') {
			setDisplay(number);
			setInput(number)
		} else {
			setDisplay(prevDisplay => prevDisplay + number)
			setInput(prevNumber => prevNumber + number)
		}
	};

	// mathematical operator buttons
	const handleOperator = (operator) => {		
		setOperator(operator);
	};

	// equals button
	const handleEquals = () => {
		let equals;

		if (inputTwo) {
			switch (operator) {
				case '+':
					equals = rounder(parseFloat(input) + parseFloat(inputTwo))
					break;
				case '-':
					equals = rounder(parseFloat(input) - parseFloat(inputTwo))
					break;				
				case '/':
					equals = rounder(parseFloat(input) / parseFloat(inputTwo))
					break;
				case 'x':
					equals = rounder(parseFloat(input) * parseFloat(inputTwo))
					break;
			}
		}

		setDisplay(equals.toString());
		setInput(equals.toString());
		setOperator('');
		setInputTwo('');
	}

	// delete button
	const handleDelete = () => {
		if (display.length === 1) {
			setDisplay('0');
			setInput('');
			return;
		}
		setDisplay(prevDisplay => prevDisplay.slice(0, -1));
		setInput(prevInput => prevInput.slice(0, -1));
	};

	// reset button
	const handleReset = () => {
		setDisplay('0');
		setInput('');
		setOperator('');
		setInputTwo('');
	};

	return (
		<div className="App">
			<div className='calculator'>
				<Header />
				<Display display={display} />
				<Controls 
					handleNumber={handleNumber}
					handleOperator={handleOperator}
					handleEquals={handleEquals}
					handleDelete={handleDelete}
					handleReset={handleReset}
				/>
			</div>
		</div>
	);
}

export default App;
