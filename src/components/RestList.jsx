import { useState } from 'react'
import { list } from '../data'
import { v4 as uuidv4 } from 'uuid'
import dots from '../images/icon-ellipsis.svg'

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
								backgroundColor: `${color}`,
							}}>
							<img src={image} alt='' className='box-up-icon' />
						</div>
						<div className='text-content'>
							<div className='text-up'>
								<p className='activity'>{title}</p>
								<img src={dots} alt='Three dots' className='dots' />
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
