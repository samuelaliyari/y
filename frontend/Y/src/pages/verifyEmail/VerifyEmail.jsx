import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VerifyEmail.scss';

const VerifyEmail = () => {
	const [v_code, setV_code] = useState('');
	const navigate = useNavigate();
	const { userId } = useParams();
	const verify = async () => {
		const fetchCode = await fetch(
			import.meta.env.VITE_SERVER_URL + '/users/verifyemail',
			{
				method: 'POST',
				body: JSON.stringify({ v_code, userId }),
				headers: { 'Content-Type': 'application/json' },
			},
		);
		const { success, error, message, result } = await fetchCode.json();
		if (!success) alert(message);
		else navigate('/');
	};
	return (
		<main className='verifyEmail'>
			<section className='wrapper'>
				<input
					type='text'
					onChange={(e) => setV_code(e.target.value)}
					placeholder='Enter your Code'
				/>
				<button onClick={verify}>Submit</button>
			</section>
		</main>
	);
};

export default VerifyEmail;
