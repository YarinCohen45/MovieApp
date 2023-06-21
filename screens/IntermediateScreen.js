import React, {useContext} from "react";
import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";
import MovieCardScroller from "../components/MovieCardScroller";
import {fetchMovies} from "../Api";
import Spacer from "../components/Spacer";
import SearchBar from "../components/SearchBar";
import {AuthenticatedUserContext} from "../navigation/appNavigtion";

const IntermediateScreen = (props) => {
    const [topMovies, setTopMovies] = React.useState([]);
    const [mostPopularMovies, setMostPopularMovies] = React.useState([]);
    const {user, setUser} = useContext(AuthenticatedUserContext);

    React.useEffect(() => {
        user.likedMovies = [];
    }, [user]);

    React.useEffect(() => {
        fetchMovies('Top250Movies').then((data) => {
            setTopMovies(data);
        });

        fetchMovies('MostPopularMovies').then((data) => {
            setMostPopularMovies(data);
        });

    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SearchBar/>
            <MovieCardScroller
                title="Top 250 Movies"
                data={topMovies}
                onLikeChanged={(item) => {

                }}
            />
            <Spacer size={20}/>
            <MovieCardScroller
                title="Most Popular Movies"
                data={mostPopularMovies}
                onLikeChanged={(item) => {

                }}
            />
            <MovieCardScroller
                title="Liked Movies"
                data={user.likedMovies}
                onLikeChanged={(item) => {

                }}
            />
        </ScrollView>
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

export default IntermediateScreen;
