import {Text, View, StyleSheet, Image} from "react-native";

const MovieRow = props => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster}}
               resizeMode="cover"/>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.plot}>{props.plot}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: '#8EBBFF',
        borderRadius: 8,
        marginVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
        backgroundColor: '#00000022',
        width: '100%',
        textAlign: 'center'
    },
    plot: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#00000022',
        textAlign: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
    },
});

export default MovieRow;