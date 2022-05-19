import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Display from './components/Display/Display.jsx';
import Controls from './components/Controls/Controls.jsx';
import Footer from './components/Footer/Footer.jsx';
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

	// handle key inputs
	const handleKeyDown = (event) => {
		switch (event.key) {
			case '1':
				handleNumber('1')
				break;
			case '2':
				handleNumber('2')
				break;
			case '3':
				handleNumber('3')
				break;
			case '4':
				handleNumber('4')
				break;
			case '5':
				handleNumber('5')
				break;
			case '6':
				handleNumber('6')
				break;
			case '7':
				handleNumber('7')
				break;
			case '8':
				handleNumber('8')
				break;
			case '9':
				handleNumber('9')
				break;
			case '0':
				handleNumber('0')
				break;
			case '.':
				handleNumber('.')
				break;
			case '+':
				handleOperator('+')
				break;
			case '-':
				handleOperator('-')
				break;
			case '/':
				handleOperator('/')
				break;
			case 'x':
				handleOperator('x')
				break;
			case '*':
				handleOperator('x')
				break;
			case 'Enter':
				handleEquals()
				break;
			case 'Backspace':
				handleDelete()
				break;
			case 'Escape':
				handleReset()
				break;
		}
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
		} else return;

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
		<div className="App" tabIndex={-1} onKeyDown={(event) => {handleKeyDown(event)}}>
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
			<Footer/>
		</div>
	);
}

export default App;
