import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GenresList } from './GenresList'
import { MovieList } from '../utils/MovieList/index'

const Stack = createStackNavigator()

export const GenresPage = () => {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name="GenresList"
					options={{
						title: 'Genres',
					}}
					component={GenresList}
				/>
				<Stack.Screen name="MoviesList" options={({ route }) => ({ title: route.params.genreName })}>
					{(props) => <MovieList {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</>
	)
}
