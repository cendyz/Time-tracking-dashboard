import { useState, useEffect } from 'react'
import RestList from './components/RestList'
import { buttons } from './data'

const App = () => {
	const [active, setActive] = useState(1)


	const {text} = buttons[active]

	return (
		<main className='main'>
			<section className='first'>
				<div className='first-up'>
					<img
						src='src/images/image-jeremy.png'
						alt='Jeremy Robson profile picture'
						className='first-img'
					/>
					<div className='first-text'>
						<p className='report'>Report for</p>
						<p className='name'>Jeremy Robson</p>
					</div>
				</div>
				<div className='first-down'>
					{buttons.map(({ id, text }, index) => {
						return (
							<button
								className={
									active === index
										? 'first-down-btns active'
										: 'first-down-btns'
								}
								type='button'
								key={id}
								onClick={() => setActive(index)}>
								{text}
							</button>
						)
					})}
				</div>
			</section>
			<RestList text={text}/>
		</main>
	)
}
export default App
