import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, Text } from 'react-native'

export const GenresList = ({ navigation }) => {
	const [data, setData] = useState([])

	let renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.5}
				style={styles.button}
				onPress={() =>
					navigation.navigate('MoviesList', {
						genreId: item.id,
						genreName: item.name,
					})
				}
			>
				<Text style={styles.buttonText}>{item.name}</Text>
			</TouchableOpacity>
		)
	}

	let fetchData = () => {
		fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=62f071d2521aba16cf7952ef57fd6e77&language=en-US`)
			.then((response) => response.json())
			.then((data) => {
				setData(data.genres)
			})
	}

	useEffect(() => {
		fetchData()
	})

	return (
		<>
			<View style={styles.fullFlex}>
				<SafeAreaView style={styles.fullFlex}>
					<FlatList style={styles.list} data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
				</SafeAreaView>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	fullFlex: {
		flex: 1,
	},
	list: {
		paddingBottom: 30,
	},
	button: {
		width: 200,
		height: 50,
		marginTop: 30,
		alignSelf: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#ff4556',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
})
