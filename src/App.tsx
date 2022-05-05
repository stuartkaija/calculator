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

	const [display, setDisplay] = useState('0');

	const [equation, setEquation] = useState(null)
	
	// more state to hold display number once user clicks operator button
	// such that the second number they start clicking in appears in display

	// display handler
	const handleNumber = (number) => {

		// check if equation is truthy, if yes, that means user has clicked an operator so display must reset to 0
		// if (equation) {
		// 	setDisplay('0')
		// }

		// check if display contains a decimel
		if (number === '.' && display.includes('.')) {
			return;
		}
		
		if (display === '0') {
			setDisplay(number);
		} else {
			setDisplay(prevDisplay => prevDisplay + number)
		}
	};

	// reset handler
	const handleReset = () => {
		setDisplay('0');
		setEquation(null)
	};

	// mathematical function handler
	const handleOperator = (operator) => {

		// check if display and equation have numbers, i.e. user is doing multiple operations


		// check if display === 0, if so ignore
		if (display === '0') {
			return
		}
		// setEquation equal to display
		setEquation(display);
		console.log(equation);
		setDisplay('0')
	};

	const handleDelete = () => {
		if (display.length === 1) {
			setDisplay('0')
			return
		}
		setDisplay(prevDisplay => prevDisplay.slice(0, -1));
	}

	// handleEquation function for equals button? 
	const handleEquals = () => {
		if (equation) {
			// convert display and equation to numbers
			const equals = parseInt(equation) + parseInt(display)

			setDisplay(equals.toString())

			// check what operator was (may need more state for this?)
		}
	}

	return (
		<div className="App">
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
	);
}

export default App;
