// internal
import { Landing, Register, Dashboard, Error } from './pages';

// external
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/register' element={<Register />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};
