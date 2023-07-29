import React, {useContext} from "react";
import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MovieCardScroller from "../components/MovieCardScroller";
import {fetch100TopMovies, fetch100TopSeries, fetchPopularMovies, fetchPopularSeries, fetchSearch} from "../Api";
import Spacer from "../components/Spacer";
import SearchBar from "../components/SearchBar";
import {AuthenticatedUserContext} from "../navigation/appNavigtion";

const HomeScreen = (props) => {
    const [topMovies, setTopMovies] = React.useState([]);
    const [mostPopularMovies, setMostPopularMovies] = React.useState([]);
    const [topSeries, setTopSeries] = React.useState([]);
    const [mostPopularSeries, setMostPopularSeries] = React.useState([]);
    const [hide, setHide] = React.useState(false);
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
                <SearchBar onOpen={() => setHide(true)}
                           onCollapse={() => setHide(false)}/>

                {!hide && <>
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
                </>}
                <TouchableOpacity onPress={() => props.navigation.navigate('Intermed')}>
                    <Text style={{color: 'white', fontSize: 20}}>Exit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#24293E',
        flexGrow: 1,
    },
});

export default HomeScreen;
