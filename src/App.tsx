import { useState } from 'react';
import './App.scss';

//@ts-ignore
import Header from './components/Header/Header.tsx';
//@ts-ignore
import Display from './components/Display/Display.tsx';
//@ts-ignore
import Controls from './components/Controls/Controls.tsx';
import { stringify } from 'querystring';

function App() {
	
	// state for what is displayed on the 'screen'
	const [display, setDisplay] = useState('0');

	// what the user inputs, with this we can update the display
	const [input, setInput] = useState('')

	const [operator, setOperator] = useState('');

	const [inputTwo, setInputTwo] = useState('');
	
	// more state to hold display number once user clicks operator button
	// such that the second number they start clicking in appears in display

	// display handler
	const handleNumber = (number) => {
		
		// check if user is punching in second number
		if (input && operator) {
			if (number === '.' && display.includes('.')) {
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
		
		// check if display contains a decimel
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

	// mathematical function handler
	const handleOperator = (operator) => {

		// check if input and inputTwo are truthy, if so this should also calculate first equation
		
		setOperator(operator);

		// check if display === 0, if so ignore
		// if (display === '0') {
		// 	return
		// }

	};

	console.log(parseFloat(typeof input))
	console.log(parseFloat(typeof inputTwo))

	// handle equals
	const handleEquals = () => {

		let equals;

		if (inputTwo) {
			if (operator === '+') {
				equals = parseInt(input) + parseInt(inputTwo)
				// equals = Math.round((parseFloat(input) + parseFloat(input) * 100)/100)
			}
			if (operator === '-') {
				equals = parseInt(input) - parseInt(inputTwo)
			}
			if (operator === '/') {
				equals = parseInt(input)/parseInt(inputTwo)
			}
			if (operator === 'x') {
				equals = parseInt(input)*parseInt(inputTwo)
			}
		}

		setDisplay(equals.toString());
		setInput(equals.toString());
		setOperator('');
		setInputTwo('');
	}

	// delete handler
	const handleDelete = () => {
		if (display.length === 1) {
			setDisplay('0');
			setInput('');
			return;
		}
		setDisplay(prevDisplay => prevDisplay.slice(0, -1));
		setInput(prevInput => prevInput.slice(0, -1));
	};

	// reset handler
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
