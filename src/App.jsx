import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
	return (
		<div className='app'>
			<ThemeProvider>
				<Header />
				<ScrollProgressBar/>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
