import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { SearchBar } from './components/SearchBar'
import { MovieList } from './components/MovieList'

export default function App() {
	const [input, setInput] = useState('')
	return (
		<>
			<SearchBar handleInputChange={setInput}></SearchBar>
			<MovieList searchFilter={input} />
		</>
	)
}
