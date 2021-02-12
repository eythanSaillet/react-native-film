import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { MovieList } from '../utils/MovieList/index'
import { SearchBar } from './SearchBar'

export const SearchPage = () => {
	const [query, setQuery] = useState('')

	return (
		<>
			<SearchBar setQuery={setQuery}></SearchBar>
			<MovieList query={query} />
		</>
	)
}

const styles = StyleSheet.create({})
