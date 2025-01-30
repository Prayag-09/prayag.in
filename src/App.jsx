import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};
export default App;
