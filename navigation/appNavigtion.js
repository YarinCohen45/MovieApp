import {View, ActivityIndicator, StatusBar} from "react-native";
import {useState, useEffect, createContext, useContext} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import HomeScreen from '../screens/HomeScreen'
import MovieCardScreen from '../components/MovieCard'
import 'react-native-gesture-handler';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import headerShownContext from "react-navigation-stack/src/vendor/utils/HeaderShownContext";
import IntermedScreen from "../screens/IntermedScreen";

const Stack = createStackNavigator();
const auth = getAuth();
export const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [likedMovies, setLikedMovies] = useState([]);
	return (
		<AuthenticatedUserContext.Provider value={{user, setUser, likedMovies, setLikedMovies}}>
			{children}
		</AuthenticatedUserContext.Provider>
	);
};

function HomeStack() {
	return (
		<Stack.Navigator
			defaultScreenOptions={IntermedScreen}
			screenOptions={{headerShown: false}}>
			<Stack.Screen name="Intermed" component={IntermedScreen}/>
			<Stack.Screen name="Home" component={HomeScreen}/>
		</Stack.Navigator>
	);
}

function AuthStack() {
	return (
		<Stack.Navigator
			defaultScreenOptions={Login}
			screenOptions={{headerShown: false}}
		>
			<Stack.Screen name="Login" component={Login}/>
			<Stack.Screen name="Signup" component={Signup}/>
		</Stack.Navigator>
	);
}


function RootNavigator() {
	const {user, setUser} = useContext(AuthenticatedUserContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
			authenticatedUser ? setUser(authenticatedUser) : setUser(null);
			setLoading(false);
		});
		return () => unsubscribe();
	}, [user]);

	if (loading) {
		return (
			<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
				<ActivityIndicator size="large"/>
			</View>
		);
	}

	return (
		<NavigationContainer>
			{user ? <HomeStack/> : <AuthStack/>}
		</NavigationContainer>
	);
}

export default function Navigator() {
	return <AuthenticatedUserProvider>
		<StatusBar backgroundColor='#24293e' barStyle="light-content"/>
		<RootNavigator/>
	</AuthenticatedUserProvider>
}
