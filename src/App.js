import './App.css'
import React from 'react'
import CalculatorPage from './components/CalculatorPage'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/calculator' element={<CalculatorPage />} />
				<Route path='/quotes' element={<QuotesPage />} />
			</Routes>
		</>
	)
}

export default App
