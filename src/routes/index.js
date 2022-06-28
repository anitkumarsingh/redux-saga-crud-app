import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import About from '../pages/About';
import Home from '../pages/Home';
import UserAddEdit from '../pages/UserAddEdit';
import UserInfo from '../pages/UserInfo';

const Main = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/user/:id'>
					<UserInfo />
				</Route>
				<Route path='/user-edit/:id'>
					<UserAddEdit />
				</Route>
				<Route path='/user-add'>
					<UserAddEdit />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route exect path='/'>
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default Main;
