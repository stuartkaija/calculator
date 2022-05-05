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

	const [equation, setEqution] = useState(null)
	
	// more state to hold display number once user clicks operator button
	// such that the second number they start clicking in appears in display

	// display handler
	const handleNumber = (number) => {

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
	};

	// mathematical function handler
	const handleOperator = (operator) => {
		// convert string num to number
		// operator will be either + - x /
		console.log(operator)

		// setEquation equal to display

	};

	const handleDelete = () => {
		if (display.length === 1) {
			setDisplay('0')
			return
		}
		setDisplay(prevDisplay => prevDisplay.slice(0, -1));
	}


	// handleEquation function for equals button? 

	return (
		<div className="App">
			<Header />
			<Display display={display} />
			<Controls 
				handleNumber={handleNumber}
				handleReset={handleReset}
				handleOperator={handleOperator}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
