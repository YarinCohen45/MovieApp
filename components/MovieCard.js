import React, {useContext, useEffect, useState} from "react";
import {View, Image, Text, TouchableOpacity, Dimensions} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import Spacer from "./Spacer";
import {AuthenticatedUserContext} from "../navigation/appNavigtion";

const MovieCard = (props) => {
	const {title, name, poster_path, vote_average} = props.item;
	const {onLikeChanged} = props;
	const borderRadius = 12;
	const {likedMovies, setLikedMovies} = useContext(AuthenticatedUserContext);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		setIsLiked(likedMovies.some((movie) => movie.id === props.item.id));
	}, [likedMovies]);

	const styles = {
		cardContainer: {
			width: Dimensions.get("window").width * 0.8,
			height: 220,
			borderRadius: borderRadius,
			justifyContent: "flex-end",
		},
		cardImage: {
			width: "100%",
			height: "100%",
			borderRadius: borderRadius,
			position: "absolute",
			zIndex: -1,
		},
		cardDetailsContainer: {
			width: Dimensions.get("window").width * 0.8,
			height: 50,
			flexDirection: "row",
			backgroundColor: "#00000088",
			borderBottomRightRadius: borderRadius,
			borderBottomLeftRadius: borderRadius,
			paddingHorizontal: 8,
			alignItems: "center",
			justifyContent: "space-between",
		},
		ratingContainer: {
			flexDirection: "row",
			flexShrink: 1,
			alignItems: "center",
		},
	};

	const CardDetails = () => {
		return (
			<View style={styles.cardDetailsContainer}>
				<View style={styles.ratingContainer}>
					<MaterialCommunityIcons name="star-shooting" size={30} color="gold"/>
					<Text
						style={{
							fontSize: 18,
							marginLeft: 4,
							color: "white",
							fontWeight: "bold",
						}}
					>
						{vote_average}
					</Text>
				</View>
				<Text
					numberOfLines={2}
					style={{
						color: "white",
						fontSize: 18,
						fontWeight: "bold",
						overflow: "hidden",
						textAlign: "center",
						flex: .9,
					}}
				>
					{title || name}
				</Text>
				<TouchableOpacity
					onPress={() => {
						onLikeChanged && onLikeChanged(!isLiked);
						if (!isLiked) {
							setLikedMovies([...likedMovies, props.item]);
							return;
						}
						setLikedMovies(likedMovies.filter((movie) => movie.id !== props.item.id));
					}}
					style={{flexShrink: 1}}
					activeOpacity={1}
				>
					<Ionicons
						name={isLiked ? "heart" : "heart-dislike"}
						size={30}
						color={isLiked ? "red" : "white"}
					/>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={{
			height: 230,
			width: Dimensions.get("window").width * 0.8 + 10,
			backgroundColor: '#303c54',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 16,
		}}>
			<View style={styles.cardContainer}>
				<Image style={styles.cardImage} source={{uri: 'https://image.tmdb.org/t/p/w500' + poster_path}}
				       resizeMode="cover"/>
				<CardDetails/>
			</View>
		</View>
	);
};

export default MovieCard;
