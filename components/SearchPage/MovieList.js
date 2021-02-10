import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, FlatList, SafeAreaView, Text } from 'react-native'

import { MovieItem } from './MovieItem'
import { movieListConfig } from '../../assets/movieListConfig'

export const MovieList = ({ searchFilter }) => {
	let renderItem = ({ item }) => {
		if (item.title.toLowerCase().includes(searchFilter.toLowerCase())) {
			return <MovieItem title={item.title} date={item.date} imageSource={item.url} />
		}
	}
	return (
		<View style={styles.view}>
			<SafeAreaView style={styles.fullFlex}>
				<FlatList data={movieListConfig} extraData={searchFilter} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
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
