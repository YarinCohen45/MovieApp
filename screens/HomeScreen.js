import React, {useContext} from "react";
import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";
import MovieCardScroller from "../components/MovieCardScroller";
import {fetch100TopMovies, fetch100TopSeries, fetchPopularMovies, fetchPopularSeries} from "../Api";
import Spacer from "../components/Spacer";
import SearchBar from "../components/SearchBar";
import {AuthenticatedUserContext} from "../navigation/appNavigtion";

const HomeScreen = (props) => {
	const [topMovies, setTopMovies] = React.useState([]);
	const [mostPopularMovies, setMostPopularMovies] = React.useState([]);
	const [topSeries, setTopSeries] = React.useState([]);
	const [mostPopularSeries, setMostPopularSeries] = React.useState([]);
	const {likedMovies} = useContext(AuthenticatedUserContext);

	React.useEffect(() => {
		fetch100TopMovies().then((data) => {
			setTopMovies(data);
		});

		fetchPopularMovies().then((data) => {
			setMostPopularMovies(data);
		});

		fetch100TopSeries().then((data) => {
			setTopSeries(data);
		});

		fetchPopularSeries().then((data) => {
			setMostPopularSeries(data);
		});

	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.container}>
				<SearchBar/>
				<MovieCardScroller
					title="Top 100 Movies"
					data={topMovies}
					onLikeChanged={(item, isLiked) => {

					}}
				/>
				<Spacer size={20}/>
				<MovieCardScroller
					title="Most Popular Movies"
					data={mostPopularMovies}
					onLikeChanged={(item, isLiked) => {

					}}
				/>
				<Spacer size={20}/>
				<MovieCardScroller
					title="Top 100 Series"
					data={topSeries}
					onLikeChanged={(item, isLiked) => {

					}}
				/>
				<Spacer size={20}/>
				<MovieCardScroller
					title="Most Popular Series"
					data={mostPopularSeries}
					onLikeChanged={(item, isLiked) => {

					}}
				/>
				<Spacer size={20}/>
				<MovieCardScroller
					title="Liked Movies"
					data={likedMovies}
					onLikeChanged={(item, isLiked) => {
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: '#24293E',
		flexGrow: 1
	},
	searchBar: {
		width: "90%",
		height: 30,
		borderColor: "#8EBBFF",
		borderWidth: 2,
		borderRadius: 20,
		fontWeight: "bold",
		marginBottom: 20,
		fontColor: "#8EBBFF",
	},
});

export default HomeScreen;
