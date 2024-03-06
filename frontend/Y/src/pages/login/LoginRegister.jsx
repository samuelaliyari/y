import { useState } from 'react';
import './LoginRegister.scss';
import tokenRefresh from '../../utils/tokenRefresh';
import setLoggedInUser from '../../utils/setLoggedInUser';
import { useNavigate } from 'react-router-dom';

const LoginRegister = ({ setAndGet }) => {
	const [loginInfo, setLoginInfo] = useState({});
	const [registerInfo, setRegisterInfo] = useState({});

	const navigate = useNavigate();

	const flipCard = () => {
		const card = document.getElementById('card');
		card.classList.toggle('is-flipped');
	};

	const login = async () => {
		event.preventDefault();
		const loginFetch = await fetch(
			import.meta.env.VITE_SERVER_URL + '/users/login',
			{
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
			},
		);
		const { success, error, accessToken, message } =
			await loginFetch.json();
		if (!success) alert(message);
		else {
			setAndGet.setAuthorization(`Bearer ${accessToken}`);
			tokenRefresh(accessToken, setAndGet.seetAuthorization);
			setLoggedInUser(
				setAndGet.authorization,
				setAndGet.setActiveProfile,
			);
			navigate('/home');
		}
	};

	const register = async () => {
		event.preventDefault();
		const registerFetch = await fetch(
			import.meta.env.VITE_SERVER_URL + '/users/register',
			{
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
			},
		);
		const { success, error, result, message } = await registerFetch.json();
		if (!success) alert(message);
		else {
			navigate('/home');
		}
	};

	return (
		<main className='loginRegister'>
			<section
				className='card'
				id='card'>
				<form
					className='login cardface'
					onSubmit={login}>
					<label name='email'>
						<input
							type='text'
							placeholder='email'
							onChange={(e) =>
								setLoginInfo({
									...loginInfo,
									email: e.target.value,
								})
							}
						/>
					</label>
					<label name='password'>
						<input
							type='password'
							placeholder='password'
							onChange={(e) =>
								setLoginInfo({
									...loginInfo,
									password: e.target.value,
								})
							}
						/>
					</label>
					<button>Sign in</button>
					<a onClick={flipCard}> sign up</a>
				</form>
				<form
					className='register cardface'
					onSubmit={register}>
					<label name='firstName'>
						<input
							type='text'
							placeholder='First Name'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									firstName: e.target.value,
								})
							}
						/>
					</label>
					<label name='lastName '>
						<input
							type='text'
							placeholder='Last Name '
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									lastName: e.target.value,
								})
							}
						/>
					</label>
					<label name='phoneNumber'>
						<input
							type='text'
							placeholder='Phone Number'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									phoneNumber: Number(e.target.value),
								})
							}
						/>
					</label>
					<label name='userName'>
						<input
							type='text'
							placeholder='userName'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									userName: e.target.value,
								})
							}
						/>
					</label>
					<label name='email'>
						<input
							type='email'
							placeholder='email'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									email: e.target.value,
								})
							}
						/>
					</label>
					<label name='confirmEmail'>
						<input
							type='email'
							placeholder='confirm email'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									emailConfirm: e.target.value,
								})
							}
						/>
					</label>
					<label name='password'>
						<input
							type='password'
							placeholder='password'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									password: e.target.value,
								})
							}
						/>
					</label>
					<label name='confirmPassword'>
						<input
							type='password'
							placeholder='confirm password'
							onChange={(e) =>
								setRegisterInfo({
									...registerInfo,
									passwordConfirm: e.target.value,
								})
							}
						/>
					</label>
					<button>Sign up</button>
					<a onClick={flipCard}> sign in</a>
				</form>
			</section>
		</main>
	);
};

export default LoginRegister;
