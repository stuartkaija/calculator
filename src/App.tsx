import './App.scss';

//@ts-ignore
import Header from './components/Header/Header.tsx';
//@ts-ignore
import Display from './components/Display/Display.tsx';
//@ts-ignore
import Controls from './components/Controls/Controls.tsx';

function App() {
	return (
		<div className="App">
			<Header />
			<Display />
			<Controls />
		</div>
	);
}

export default App;
