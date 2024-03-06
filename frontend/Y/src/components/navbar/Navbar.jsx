import './Navbar.scss';
import logo from '../../../public/logo.png';
import logout from '../../../public/logout.png';
import login from '../../../public/login.png';
import profile from '../../../public/profile.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ setAndGet }) => {
	const navigate = useNavigate();
	const logoutUser = async () => {
		const logoutFetch = await fetch(
			import.meta.env.VITE_SERVER_URL + '/users/logout',
			{
				headers: { authorization: setAndGet.authorization },
				credentials: 'include',
			},
		);
		const { success, error, message, result } = await logoutFetch.json();
		if (!success) alert(message);
		else {
			setAndGet.setAuthorization('');
			setAndGet.setActiveProfile('');
			navigate('/');
		}
	};

	return (
		<header>
			<nav>
				<div onClick={() => navigate('/home')}>
					<img
						src={logo}
						alt='Logo as the y alphabet'
					/>
				</div>

				<div>
					<NavLink to='/'>
						{' '}
						<img
							src={login}
							alt=''
						/>
					</NavLink>

					{setAndGet.authorization?.includes('Bearer') ? (
						<NavLink to={`/profile/${setAndGet.activeProfile}`}>
							{' '}
							<img
								src={profile}
								alt=''
							/>
						</NavLink>
					) : null}
					{setAndGet.authorization?.includes('Bearer') ? (
						<img
							src={logout}
							alt=''
							onClick={logoutUser}
						/>
					) : null}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
