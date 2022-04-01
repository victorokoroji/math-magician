import React from 'react'
import Header from './Header'

const Quotes = () => (
	<section>
		<Header />
		<div className='quotes-container'>
			<p className='quote'>
				<span className='quoteText'>
					Mathematics is not about numbers, equations, computations, or algorithms: it is about
					understanding. -
				</span>{' '}
				<span className='authorName'>William Paul Thurston</span>
			</p>
		</div>
	</section>
)

export default Quotes
