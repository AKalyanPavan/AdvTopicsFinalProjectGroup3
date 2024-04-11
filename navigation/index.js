import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
	const [user, setUser] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
			setUser(authUser);
		});

		return unsubscribe;
	}, []);

	return (
		<NavigationContainer>
			{user ? ( // If user is authenticated, show the authenticated stack
				<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={HomeScreen} />
				</Stack.Navigator>
			) : ( // If user is not authenticated, show the authentication stack
				<Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SignIn" component={SignInScreen} />
					<Stack.Screen name="Registration" component={RegistrationScreen} />
				</Stack.Navigator>
			)}
		</NavigationContainer>

	)
}

export default AppNavigation;