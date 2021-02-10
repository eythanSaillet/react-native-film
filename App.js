import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { SearchPage } from './components/SearchPage/index'

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName

							if (route.name === 'Search') {
								iconName = focused ? 'search-circle' : 'search-circle-outline'
							} else if (route.name === 'Categories') {
								iconName = focused ? 'file-tray-full' : 'file-tray-full-outline'
							}

							// You can return any component that you like here!
							return <Ionicons name={iconName} size={30} color={color} />
						},
					})}
					tabBarOptions={{
						activeTintColor: 'white',
						inactiveTintColor: '#ffc7cc',
						showLabel: false,
						style: {
							backgroundColor: '#ff4556',
						},
					}}
				>
					<Tab.Screen name="Search" component={SearchPage} />
					<Tab.Screen name="Categories" component={SearchPage} />
				</Tab.Navigator>
			</NavigationContainer>
		</>
	)
}
