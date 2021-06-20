import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CameraComponent from './views/camera';
import Gallery from './views/gallery';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/capture" >
					<CameraComponent />
				</Route>
				<Route path="/gallery" >
					<Gallery />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
