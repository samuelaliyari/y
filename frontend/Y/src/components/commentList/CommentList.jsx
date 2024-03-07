import Comment from '../comment/Comment';
import send from '../../../public/send.png';
import back from '../../../public/back.png';
import './CommentList.scss';
import { useState } from 'react';

const CommentList = ({ comments, setAndGet, fiddleId, flipCard }) => {
	const [newComment, setNewComment] = useState({ fiddleId });

	const sortBeiCratedAt = (array) => {
		return array.sort(
			(a, b) =>
				-new Date(a?.createdAt).getTime() +
				new Date(b?.createdAt).getTime(),
		);
	};

	const sendComment = async () => {
		const commentFetch = await fetch(
			import.meta.env.VITE_SERVER_URL + '/fiddles/comment',
			{
				method: 'POST',
				body: JSON.stringify(newComment),
				credentials: 'include',
				headers: {
					authorization: setAndGet.authorization,
					'Content-Type': 'application/json',
				},
			},
		);
		const { success, error, message, result } = await commentFetch.json();
		if (!success) alert(message);
		else {
			setAndGet.setThisFiddle(result);
			setNewComment({ ...newComment, content: '' });
			// setAndGet.flipCard(fiddleId);
		}
	};

	return (
		<main
			className={`commentList ${fiddleId}`}
			id={fiddleId}>
			{sortBeiCratedAt(comments).map((comment, index) => (
				<Comment
					key={index}
					comment={comment}
					setAndGet={setAndGet}
				/>
			))}

			<section className='commentInput'>
				<div
					className='backButton'
					onClick={flipCard}>
					<img
						src={back}
						alt=''
					/>
				</div>
				<input
					type='text'
					placeholder='Your comment ...'
					onChange={(e) =>
						setNewComment({
							...newComment,
							content: e.target.value,
						})
					}
					value={newComment.content}
				/>

				<div
					className='sendButton'
					onClick={sendComment}>
					<img
						src={send}
						alt=''
					/>
				</div>
			</section>
		</main>
	);
};

export default CommentList;
