import { useNavigate, useParams } from 'react-router-dom';
import './Profile.scss';
import { useEffect, useState } from 'react';
import FiddleList from '../../components/fiddleList/FiddleList';
import getAllProfiles from '../../utils/getAllProfiles';
import getAllFiddles from '../../utils/getAllFiddles';

const Profile = ({ setAndGet }) => {
	const { profileid } = useParams();
	const [renderFiddles, setRenderFiddles] = useState([]);
	const [thisProfile, setThisProfile] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		getAllProfiles(setAndGet);
		getAllFiddles(setAndGet);
		setRenderFiddles(myFiddles);
	}, [setAndGet.authorization]);

	const likedFiddles = setAndGet.fiddles.filter((fiddle) =>
		fiddle.likes.find((like) => like.profileId === profileid),
	);
	const reFiddles = setAndGet.fiddles.filter((fiddle) =>
		fiddle.refiddles.find((refiddle) => refiddle.profileId === profileid),
	);

	const profile = setAndGet.profiles.find(
		(profile) => profile._id.toString() === profileid,
	);

	const following = setAndGet.profiles.filter(
		(profile) => profile.follower === profileid,
	);

	const showRefiddles = () => {
		setRenderFiddles(reFiddles);
	};

	const showLikedFiddles = () => {
		setRenderFiddles(likedFiddles);
	};

	const myFiddles = setAndGet.fiddles.filter(
		(fiddle) => fiddle.profileId === profileid,
	);

	useEffect(() => {
		setRenderFiddles(myFiddles);
		setThisProfile(profile);
	}, [profileid, profile]);

	const followed = !!thisProfile?.follower?.find(
		(follower) => follower === setAndGet.activeProfile,
	);

	const toggleFollow = async () => {
		const fetchLike = await fetch(
			import.meta.env.VITE_SERVER_URL + '/profiles/togglefollow',
			{
				method: 'post',
				body: JSON.stringify({ targetProfileId: profileid }),
				headers: {
					'Content-Type': 'application/json',
					authorization: setAndGet.authorization,
				},
				credentials: 'include',
			},
		);
		const { success, error, message, result } = await fetchLike.json();
		if (!success) console.log(error, message);
		else {
			setThisProfile(result);
		}
	};

	return (
		<main className='profile'>
			<section className='profileInfo'>
				<div className='imageAndBio'>
					<div className='imageWrapper'>
						<img
							src={
								import.meta.env.VITE_MEDIA_URL +
								`/${profile?.profileImg}`
							}
							alt=''
						/>
						<div>
							<h2>{thisProfile?.userName}</h2>
							{thisProfile?._id?.toString() !==
							setAndGet.activeProfile ? (
								<button onClick={toggleFollow}>
									{followed ? 'Unfollow' : 'follow'}
								</button>
							) : (
								<button
									style={{
										backgroundColor: 'rgb(56, 56, 255)',
									}}
									onClick={() =>
										navigate(
											`/editprofile/${setAndGet.activeProfile}`,
										)
									}>
									Edit Profile
								</button>
							)}
						</div>
					</div>
					<div className='bio'>{thisProfile?.bio}</div>
				</div>
				<div className='infoWrapper'>
					<h4 onClick={() => setRenderFiddles(myFiddles)}>
						Fiddles: {myFiddles.length}
					</h4>
					<h4>Follower: {thisProfile?.follower?.length}</h4>
					<h4 onClick={showRefiddles}>
						Refiddles: {reFiddles.length}
					</h4>
					<h4 onClick={showLikedFiddles}>
						Liked Fiddles: {likedFiddles.length}
					</h4>
					<h4>Following: {following.length}</h4>
				</div>
			</section>
			<section className='myFiddles'>
				<FiddleList
					setAndGet={setAndGet}
					fiddles={renderFiddles}
				/>
			</section>
		</main>
	);
};

export default Profile;
