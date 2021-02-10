import { getStatusBarHeight } from 'react-native-status-bar-height'
import React from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'

export const SearchBar = ({ handleInputChange }) => {
	return (
		<View style={styles.container}>
			<View style={styles.searchBar}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => {
						handleInputChange(text)
					}}
				/>
				<View pointerEvents="none" style={styles.searchIconContainer}>
					<Image style={styles.searchIcon} source={require('../assets/loupe.png')}></Image>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ff4556',
		paddingTop: getStatusBarHeight(),
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,
	},
	searchBar: {
		height: 50,
		marginLeft: 20,
		marginRight: 20,
	},
	input: {
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 15,
		paddingLeft: '15%',
		paddingRight: '5%',
		paddingTop: '1%',
		fontSize: 20,
	},
	searchIconContainer: {
		position: 'absolute',
		top: 4,
		bottom: 0,
		left: '5%',
		justifyContent: 'center',
	},
	searchIcon: {
		width: 20,
		height: 20,
	},
})
