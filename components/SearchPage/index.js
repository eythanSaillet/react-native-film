import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { MovieList } from './MovieList'
import { SearchBar } from './SearchBar'

export const SearchPage = () => {
	const [input, setInput] = useState('')

	return (
		<>
			<SearchBar handleInputChange={setInput}></SearchBar>
			<MovieList searchFilter={input} />
		</>
	)
}

const styles = StyleSheet.create({})
