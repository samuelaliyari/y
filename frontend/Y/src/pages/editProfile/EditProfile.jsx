import { useNavigate, useParams } from 'react-router-dom';
import './EditProfile.scss';
import { useEffect, useState } from 'react';
import getAllProfiles from '../../utils/getAllProfiles';

const EditProfile = ({ setAndGet }) => {
	const { userId } = useParams();
	const [profileImg, setProfileImg] = useState();
	const [profile, setProfile] = useState({});

	const navigate = useNavigate();

	const saveProfile = async () => {
		event.preventDefault();
		const fd = new FormData();
		fd.append('userName', profile.userName);
		fd.append('_id', profile._id);
		profile.bio ? fd.append('bio', profile.bio) : null;
		profileImg ? fd.append('image', profileImg, profileImg.name) : null;
		const editFetch = await fetch(
			import.meta.env.VITE_SERVER_URL + '/profiles/editprofile',
			{
				method: 'post',
				body: fd,
				headers: {
					authorization: setAndGet.authorization,
				},
				credentials: 'include',
			},
		);
		const { success, error, message, result } = await editFetch.json();
		if (!success) alert(message);
		else navigate(`/profile/${userId}`);
	};

	useEffect(() => {
		getAllProfiles(setAndGet);
		const userProfile = setAndGet.profiles.find(
			(profile) => profile._id.toString() === userId,
		);
		setProfile(userProfile);
	}, [setAndGet.authorization]);

	const setSrc = () => {
		if (profileImg) return URL.createObjectURL(profileImg);
		else return import.meta.env.VITE_MEDIA_URL + `/${profile?.profileImg}`;
	};

	return (
		<main className='editProfile'>
			<form>
				<div>
					<img
						src={setSrc()}
						alt=''
					/>
					<input
						type='file'
						onChange={(e) => {
							setProfileImg(e.target.files[0]);
						}}
					/>
				</div>
				<input
					type='text'
					placeholder='Username'
					defaultValue={profile?.userName}
					onChange={(e) =>
						setProfile({
							...profile,
							userName: e.target.value,
						})
					}
				/>
				<textarea
					name=''
					id=''
					cols='30'
					rows='5'
					placeholder='Bio'
					defaultValue={profile?.bio}
					onChange={(e) =>
						setProfile({ ...profile, bio: e.target.value })
					}></textarea>
				<button onClick={saveProfile}> Save Changes</button>
			</form>
		</main>
	);
};

export default EditProfile;
