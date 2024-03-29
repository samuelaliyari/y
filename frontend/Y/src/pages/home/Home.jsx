import AddFiddle from '../../components/addFiddle/AddFiddle';
import FiddleList from '../../components/fiddleList/FiddleList';
import './Home.scss';
import add from '../../../public/add.png';
import { useEffect } from 'react';
import getAllFiddles from '../../utils/getAllFiddles';
import getAllProfiles from '../../utils/getAllProfiles';

const Home = ({ setAndGet }) => {
	const showAddModal = () => {
		const addModal = document.getElementById('addModal');
		addModal.style.display = 'flex';
	};

	useEffect(() => {
		getAllFiddles(setAndGet);
		getAllProfiles(setAndGet);
	}, [setAndGet.authorization]);

	return (
		<main
			className='home '
			id='home'>
			<FiddleList
				setAndGet={setAndGet}
				fiddles={setAndGet.fiddles}
			/>
			<AddFiddle
				activeProfile={setAndGet.activeProfile}
				setAndGet={setAndGet}
			/>
			<div className='addButton'>
				<img
					src={add}
					alt=''
					onClick={showAddModal}
				/>
			</div>
		</main>
	);
};

export default Home;
