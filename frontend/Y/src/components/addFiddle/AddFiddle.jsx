import './AddFiddle.scss';
import send from '../../../public/send.png';
import close from '../../../public/close.png';
import { useState } from 'react';
const AddFiddle = ({ activeProfile, setAndGet }) => {
	const [newFiddle, setNewFiddle] = useState({
		profileId: activeProfile,
	});
	const profile = setAndGet.profiles.find(
		(profile) => profile._id === activeProfile,
	);

	const hideAddModal = () => {
		const addModal = document.getElementById('addModal');
		addModal.style.display = 'none';
	};
	const sendFiddle = async () => {
		const addModal = document.getElementById('addModal');
		setTimeout(() => (addModal.style.display = 'none'), 400);
		const fd = new FormData();
		fd.append('profileId', newFiddle.profileId);
		fd.append('content', newFiddle.content);
		newFiddle.file
			? fd.append('image', newFiddle.file, newFiddle.file.name)
			: null;
		const fetchNewFiddle = await fetch(
			import.meta.env.VITE_SERVER_URL + `/fiddles/newFiddle`,
			{
				method: 'POST',
				body: fd,
				headers: { authorization: setAndGet.authorization },
			},
		);
		const { success, error, result } = await fetchNewFiddle.json();
		if (!success) console.log(error);
		else console.log(result);
	};
	return (
		<section
			className='addFiddle'
			id='addModal'>
			<form>
				<img
					src={
						import.meta.env.VITE_MEDIA_URL +
						`/${profile?.profileImg}`
					}
					alt=''
				/>
				<textarea
					placeholder='Fiddle something...'
					name=''
					id=''
					cols='50'
					rows='15'
					onChange={(e) =>
						setNewFiddle({ ...newFiddle, content: e.target.value })
					}></textarea>
				<input
					type='file'
					name=''
					id=''
					onChange={(e) =>
						setNewFiddle({ ...newFiddle, file: e.target.files[0] })
					}
				/>
				<img
					src={send}
					alt=''
					onMouseDown={sendFiddle}
				/>
				<img
					src={close}
					alt=''
					onClick={hideAddModal}
				/>
			</form>
		</section>
	);
};

export default AddFiddle;
