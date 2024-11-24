import img2 from './images/icon-exercise.svg'
import img3 from './images/icon-play.svg'
import img4 from './images/icon-self-care.svg'
import img5 from './images/icon-social.svg'
import img6 from './images/icon-study.svg'
import img7 from './images/icon-work.svg'

export const list = [
	{
		title: 'Work',
		timeframes: {
			daily: {
				current: 5,
				previous: 7,
			},
			weekly: {
				current: 32,
				previous: 36,
			},
			monthly: {
				current: 103,
				previous: 128,
			},
		},
		image: img7,
		color: '#ff8c66',
	},
	{
		title: 'Play',
		timeframes: {
			daily: {
				current: 1,
				previous: 2,
			},
			weekly: {
				current: 10,
				previous: 8,
			},
			monthly: {
				current: 23,
				previous: 29,
			},
		},
		image: img3,
		color: '#56c2e6',
	},
	{
		title: 'Study',
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 7,
			},
			monthly: {
				current: 13,
				previous: 19,
			},
		},
		image: img6,
		color: '#ff5c7c',
	},
	{
		title: 'Exercise',
		timeframes: {
			daily: {
				current: 1,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 5,
			},
			monthly: {
				current: 11,
				previous: 18,
			},
		},
		image: img2,
		color: '#4acf81',
	},
	{
		title: 'Social',
		timeframes: {
			daily: {
				current: 1,
				previous: 3,
			},
			weekly: {
				current: 5,
				previous: 10,
			},
			monthly: {
				current: 21,
				previous: 23,
			},
		},
		image: img5,
		color: '#7536d3',
	},
	{
		title: 'Self Care',
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 2,
				previous: 2,
			},
			monthly: {
				current: 7,
				previous: 11,
			},
		},
		image: img4,
		color: '#f1c65b',
	},
]

export const buttons = [
	{
		id: 1,
		text: 'daily',
	},
	{
		id: 2,
		text: 'weekly',
	},
	{
		id: 3,
		text: 'monthly',
	},
]
