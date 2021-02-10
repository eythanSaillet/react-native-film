import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

import { MovieItem } from './MovieItem'

export const MovieList = ({ query }) => {
	const [data, setData] = useState([])

	let renderItem = ({ item }) => {
		return <MovieItem title={item.original_title} date={item.release_date} imageSource={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
	}

	let fetchData = () => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=62f071d2521aba16cf7952ef57fd6e77&query=${query}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data.results)
			})
	}

	useEffect(() => {
		if (query !== '') {
			fetchData()
		}
	}, [query])

	return (
		<View style={styles.view}>
			<SafeAreaView style={styles.fullFlex}>
				<FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 5,
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,
	},
	fullFlex: {
		flex: 1,
	},
	border: {
		height: 0.5,
		backgroundColor: 'grey',
	},
})
