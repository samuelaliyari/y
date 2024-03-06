import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
import tokenRefresh from './utils/tokenRefresh';
import setLoggedInUser from './utils/setLoggedInUser';
import LoginRegister from './pages/login/LoginRegister';
import EditProfile from './pages/editProfile/EditProfile';
import Profile from './pages/profile/Profile';
import VerifyEmail from './pages/verifyEmail/VerifyEmail';

function App() {
	const [activeProfile, setActiveProfile] = useState('');
	const [users, setUsers] = useState([]);
	const [profiles, setProfiles] = useState([]);
	const [fiddles, setFiddles] = useState([]);
	const [renderFiddles, setRenderFiddles] = useState([]);
	const [authorization, setAuthorization] = useState();

	useEffect(() => {
		tokenRefresh(null, setAuthorization);
	}, []);

	useEffect(() => {
		authorization !== ''
			? setLoggedInUser(authorization, setActiveProfile)
			: null;
	}, [authorization]);

	const setAndGet = {
		activeProfile,
		setActiveProfile,
		fiddles,
		setFiddles,
		renderFiddles,
		setRenderFiddles,
		authorization,
		setAuthorization,
		users,
		setUsers,
		profiles,
		setProfiles,
	};

	return (
		<>
			<BrowserRouter>
				<Navbar setAndGet={setAndGet} />
				<Routes>
					<Route
						path='/'
						element={<LoginRegister setAndGet={setAndGet} />}
					/>
					<Route
						path='/editprofile/:userId'
						element={<EditProfile setAndGet={setAndGet} />}
					/>
					<Route
						path='/home'
						element={<Home setAndGet={setAndGet} />}
					/>
					<Route
						path='/profile/:profileid'
						element={<Profile setAndGet={setAndGet} />}
					/>
					<Route
						path='/verify/:userId'
						element={<VerifyEmail setAndGet={setAndGet} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
