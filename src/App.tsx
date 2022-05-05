import { useState, useEffect } from 'react';
import './App.scss';

//@ts-ignore
import Header from './components/Header/Header.tsx';
//@ts-ignore
import Display from './components/Display/Display.tsx';
//@ts-ignore
import Controls from './components/Controls/Controls.tsx';

function App() {

	const [display, setDisplay] = useState(0);

	return (
		<div className="App">
			<Header />
			<Display display={display} />
			<Controls />
		</div>
	);
}

export default App;
