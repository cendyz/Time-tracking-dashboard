import { list } from '../data'
import { v4 as uuidv4 } from 'uuid'

const RestList = () => {
	return (
		<>
			{list.map(({ title, timeframes, image, color }) => {
				const id = uuidv4()
                const weekly = timeframes.weekly.current
				return (
					<section className='box' key={id}>
						<div className='box-up' style={{backgroundImage: `url(${image})`, backgroundColor: `${color}`}}></div>
						<div className='text-content'>
							<div className='text-up'>
								<p className='activity'>{title}</p>
								<p className='dots'>•••</p>
							</div>
							<div className='text-down'>
								<p className='hours'>{weekly}hrs</p>
								<p className='time'>Last Week - 36hrs</p>
							</div>
						</div>
					</section>
				)
			})}
		</>
	)
}
export default RestList
