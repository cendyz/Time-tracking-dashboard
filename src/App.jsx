import { useState, useEffect } from 'react'

import RestList from './components/RestList'

const App = () => {
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
					<p className='first-down-text'>daily</p>
					<p className='first-down-text'>weekly</p>
					<p className='first-down-text'>monthly</p>
				</div>
			</section>
			<RestList />
		</main>
	)
}
export default App

//
//   Jeremy Robson

//   Daily
//   Weekly
//   Monthly

//   Work
//   5hrs <!-- daily -->
//   Previous - 7hrs <!-- daily -->
//   32hrs <!-- weekly -->
//   Previous - 36hrs <!-- weekly -->
//   103hrs <!-- monthly -->
//   Previous - 128hrs <!-- monthly -->

//   Play
//   1hr <!-- daily -->
//   Previous - 2hrs <!-- daily -->
//   10hrs <!-- weekly -->
//   Previous - 8hrs <!-- weekly -->
//   23hrs <!-- monthly -->
//   Previous - 29hrs <!-- monthly -->

//   Study
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 7hrs <!-- weekly -->
//   13hrs <!-- monthly -->
//   Previous - 19hrs <!-- monthly -->

//   Exercise
//   1hr <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 5hrs <!-- weekly -->
//   11hrs <!-- monthly -->
//   Previous - 18hrs <!-- monthly -->

//   Social
//   1hr <!-- daily -->
//   Previous - 3hrs <!-- daily -->
//   5hrs <!-- weekly -->
//   Previous - 10hrs <!-- weekly -->
//   21hrs <!-- monthly -->
//   Previous - 23hrs <!-- monthly -->

//   Self Care
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   2hrs <!-- weekly -->
//   Previous - 2hrs <!-- weekly -->
//   7hrs <!-- monthly -->
//   Previous - 11hrs <!-- monthly -->
