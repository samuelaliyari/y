import './Fiddle.scss';
import like from '../../../public/like.png';
import dislike from '../../../public/dislike.png';
import liked from '../../../public/liked.png';
import disliked from '../../../public/disliked.png';
import refiddle from '../../../public/refiddle.png';
import refiddled from '../../../public/refiddled.png';
import comments from '../../../public/comments.png';
import { useState } from 'react';
import getAllFiddles from '../../utils/getAllFiddles';
import { useNavigate } from 'react-router-dom';
import CommentList from '../commentList/CommentList';

const Fiddle = ({ setAndGet, fiddle }) => {
	const [thisFiddle, setThisFiddle] = useState(fiddle);
	const navigate = useNavigate();
	const profile = setAndGet.profiles.find(
		(profile) => profile._id === fiddle.profileId,
	);

	const likeFiddle = async () => {
		const fetchLike = await fetch(
			import.meta.env.VITE_SERVER_URL + '/fiddles/like',
			{
				method: 'post',
				body: JSON.stringify({ fiddleId: thisFiddle._id }),
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
			setThisFiddle(result);
			getAllFiddles(setAndGet);
		}
	};

	const dislikeFiddle = async () => {
		const fetchDislike = await fetch(
			import.meta.env.VITE_SERVER_URL + '/fiddles/dislike',
			{
				method: 'post',
				body: JSON.stringify({ fiddleId: thisFiddle._id }),
				headers: {
					'Content-Type': 'application/json',
					authorization: setAndGet.authorization,
				},
				credentials: 'include',
			},
		);
		const { success, error, message, result } = await fetchDislike.json();
		if (!success) console.log(error, message);
		else {
			setThisFiddle(result);
			getAllFiddles(setAndGet);
		}
	};

	const reFiddle = async () => {
		const fetchRefiddle = await fetch(
			import.meta.env.VITE_SERVER_URL + '/fiddles/refiddle',
			{
				method: 'post',
				body: JSON.stringify({ fiddleId: thisFiddle._id }),
				headers: {
					'Content-Type': 'application/json',
					authorization: setAndGet.authorization,
				},
				credentials: 'include',
			},
		);
		const { success, error, message, result } = await fetchRefiddle.json();
		if (!success) console.log(error, message);
		else {
			setThisFiddle(result);
			getAllFiddles(setAndGet);
		}
	};
	const flipCard = () => {
		const card = document.getElementById(thisFiddle._id);
		card.scrollIntoView({
			block: 'center',
			inline: 'nearest',
			behavior: 'smooth',
		});
		card.classList.toggle('is-flipped');
	};
	setAndGet = { ...setAndGet, setThisFiddle, flipCard };
	return (
		<section
			className='fiddle card'
			id={thisFiddle._id}>
			<article className='fiddleFront cardface'>
				<div
					className='userInfo'
					onClick={() => navigate(`/profile/${profile._id}`)}>
					<img
						src={
							import.meta.env.VITE_MEDIA_URL +
							`/${profile?.profileImg}`
						}
						alt=''
					/>
					<h3>{profile?.userName}</h3>
				</div>
				<div className='content'>
					<p>{thisFiddle.content}</p>
				</div>
				{thisFiddle.contentMedia !== '' ? (
					<div className='media'>
						<iframe
							src={
								thisFiddle.contentMedia.includes('http')
									? thisFiddle.contentMedia
									: import.meta.env.VITE_MEDIA_URL +
									  `/${thisFiddle?.contentMedia}?mute=1;`
							}
							frameborder='1'
							loading='lazy'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute'
							allowFullscreen='1'
							width='50%'
							mute='1'
							autoPlay='0'
							scrolling='no'></iframe>
					</div>
				) : null}
				<div className='reactions'>
					<div onClick={likeFiddle}>
						<img
							src={
								thisFiddle.likes.find(
									(like) =>
										like.profileId ===
										setAndGet.activeProfile,
								)
									? liked
									: like
							}
							alt=''
						/>
						<p>{thisFiddle.likes.length}</p>
					</div>
					<div onClick={dislikeFiddle}>
						<img
							src={
								thisFiddle.dislikes.find(
									(dislike) =>
										dislike.profileId ===
										setAndGet.activeProfile,
								)
									? disliked
									: dislike
							}
							alt=''
						/>
						<p>{thisFiddle.dislikes.length}</p>
					</div>
					<div onClick={reFiddle}>
						<img
							src={
								thisFiddle.refiddles.find(
									(refiddle) =>
										refiddle.profileId ===
										setAndGet.activeProfile,
								)
									? refiddled
									: refiddle
							}
							alt=''
						/>
						<p>{thisFiddle.refiddles.length}</p>
					</div>
					<div onClick={flipCard}>
						<img
							src={comments}
							alt=''
						/>
						<p>{thisFiddle.comments.length}</p>
					</div>
				</div>
			</article>
			<article className={'comments cardface'}>
				<CommentList
					comments={thisFiddle.comments}
					setAndGet={setAndGet}
					fiddleId={thisFiddle._id}
					flipCard={flipCard}
				/>
			</article>
		</section>
	);
};

export default Fiddle;
