import Fiddle from '../fiddle/Fiddle';
import './FiddleList.scss';
const FiddleList = ({ setAndGet, fiddles }) => {
	return (
		<section className='fiddleList'>
			{fiddles.map((fiddle) => (
				<Fiddle
					key={fiddle._id}
					fiddle={fiddle}
					setAndGet={setAndGet}
				/>
			))}
		</section>
	);
};

export default FiddleList;
