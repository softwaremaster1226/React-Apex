import Content from './Content.js';
import AppContextProvider from './Context.js';
import Welcome from './Welcome.js';
import Timer from './Timer.js';
import ParsedData from './ParsedData.js';
import './App.css';

function App() {
	// Display greeting in header

	return (
		<AppContextProvider>
			<div className="App">
				<header className="App-header">
					<Welcome />
					<Timer />
				</header>
				<div className="App-main">
					<div className="App-panel Panel-border">
						<ParsedData />
						{/* Import Instructions module here */}
					</div>
					<div className="App-panel">
						<Content />
					</div>
				</div>
			</div>
		</AppContextProvider>
	);
}

export default App;
