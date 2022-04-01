import './App.css'
import React from 'react'
import Calculator from './components/Calculator'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/quotes' element={<QuotesPage />} />
			</Routes>
		</>
	)
}

export default App
