import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export const MovieItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.5}>
			<View style={styles.container}>
				<View style={styles.thumbnailContainer}>
					<Image style={{ width: 40, height: 63 }} source={props.imageSource} />
				</View>
				<View style={styles.infosContainer}>
					<Text style={styles.title}>{props.title}</Text>
					<Text>{props.date}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 100,
		// borderBottomWidth: 0.5,
		// borderColor: 'grey',
	},
	thumbnailContainer: {
		alignItems: 'center',
		width: 80,
	},
	infosContainer: {
		justifyContent: 'space-between',
		height: 43,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
})
