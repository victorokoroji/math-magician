import React from 'react'
import Header from './Header'

const HomePage = () => (
	<section>
		<Header />
		<div className='home'>
			<h3>Welcome to the world of mathematics</h3>
			<p className='par1'>
				Mathematics is an area of knowledge, which includes the study of such topics as numbers,
				formulas and related structures, shapes and spaces in which they are contained, and
				quantities and their changes. There is no general consensus about its exact scope or
				epistemological status. Certain qualities that are nurtured by mathematics are power of
				reasoning, creativity, abstract or spatial thinking, critical thinking, problem-solving
				ability and even effective communication skills.
			</p>
			<p className='par2'>
				Mathematics is the cradle of all creations, without which the world cannot move an inch. Be	it a cook or a farmer, a carpenter or a mechanic, a shopkeeper or a doctor, an engineer or a
				scientist, a musician or a magician, everyone needs mathematics in their day-to-day life.
			</p>
		</div>
	</section>
)

export default HomePage
