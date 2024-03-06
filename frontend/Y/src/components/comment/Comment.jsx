import './Comment.scss';

const Comment = ({ comment, setAndGet }) => {
	const profile = setAndGet.profiles?.find(
		(profile) => profile._id === comment.profileId,
	);
	return (
		<article className='commentBox'>
			<article className='comment'>
				<div>
					<img
						src={
							import.meta.env.VITE_MEDIA_URL +
							`/${profile?.profileImg}`
						}
						alt=''
					/>
					<h5>{profile?.userName}</h5>
				</div>
				<p>{comment?.content}</p>
			</article>
		</article>
	);
};

export default Comment;
