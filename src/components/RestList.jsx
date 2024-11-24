import { useState } from 'react'
import { list } from '../data'
import { v4 as uuidv4 } from 'uuid'

const RestList = ({ text }) => {
	return (
		<>
			{list.map(({ title, timeframes, image, color }) => {
				const id = uuidv4()

				const current = timeframes[text].current
				const previous = timeframes[text].previous

				return (
					<section className='box' key={id}>
						<div
							className='box-up'
							style={{
								backgroundImage: `url(${image})`,
								backgroundColor: `${color}`,
							}}></div>
						<div className='text-content'>
							<div className='text-up'>
								<p className='activity'>{title}</p>
								<p className='dots'>•••</p>
							</div>
							<div className='text-down'>
								<p className='hours'>{current}hrs</p>
								<p className='time'>Last Week - {previous}hrs</p>
							</div>
						</div>
					</section>
				)
			})}
		</>
	)
}
export default RestList
