import React, {useEffect} from "react";
import {View, TouchableOpacity, Image, StyleSheet, SafeAreaView, Text, Alert, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontAwesome} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import {auth} from "../config/firebase";
import {signOut} from "firebase/auth";
import {AntDesign} from "@expo/vector-icons";


const IntermedScreen = () => {
	const navigation = useNavigation();


	const onSignOut = () => {
		signOut(auth).catch((error) => console.log(error));
	};


	function handleContinue() {
		navigation.navigate("Home");
	}

	return (
		<SafeAreaView className="flex-1">
			<View className="flex-row justify-between items-center p-4">
				<View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
					<View style={styles.frame1}>
						<Text style={styles.text1}>About The App-{"\n"}
							This movie app is written on React Native platform
							The application displays information about all the movies/series that are on the well-known website IMDB,
							The user can enter the name of a movie/series in the search field, and get the content he requested.
							On IMDB's website, from the available options, he can select any content and add it to the favorites
							category.</Text>
					</View>
				</View>
				<View style={styles.frame2}>
					<Text style={styles.text2}>Yarin cohen{"\n"}
						yarinc45@gmail.com{"\n"}
						Software Engineering</Text>
				</View>
				
			</View>
			{/* signout */}
			<View style={{flexDirection: "row", alignSelf: 'center'}}>
				<TouchableOpacity
					style={styles.Button}
					onPress={onSignOut}
				>
					<AntDesign name="logout" size={24} color="black"/>
				</TouchableOpacity>

				{/* homeScreen */}
				<TouchableOpacity
					onPress={handleContinue}
					// onPress={() => navigation.navigate("Home")}
					style={styles.Button}
				>
					<AntDesign name="home" size={24} color="black"/>
				</TouchableOpacity>
			</View>

		</SafeAreaView>

	);
};
export default IntermedScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "#fff",
		flexDirection: 'row',

	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch' for different scaling options
	},
	Button: {
		backgroundColor: '#8EBBFF',
		height: 80,
		width: 80,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: '#8EBBFF',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.9,
		shadowRadius: 8,
		marginRight: 20,
		marginBottom: 20,
		alignSelf: 'center',
	},

	mapButton: {
		backgroundColor: "#ffe4c4",
		height: 50,
		width: 50,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.9,
		shadowRadius: 8,
		marginRight: 20,
		marginBottom: 50,
	},
	Text: {
		marginTop: 120,
		fontSize: 40,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.7,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	frame1: {
		borderWidth: 2,
		borderColor: 'black',
		padding: 20,
		textAlign: 'center',
		backgroundColor: '#8EBBF'
	},
	frame2: {
		borderWidth: 2,
		borderColor: 'black',
		padding: 20,
		textAlign: 'center',

	},
	text1: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'Cochin',
	},
	text2: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: 'Cochin',
	},
});


