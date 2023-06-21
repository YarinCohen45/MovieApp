import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = (props) => {
  const { name, img, rating, like, onLikeChanged } = props.item;
  const borderRadius = 12;
  const [isLiked, setIsLiked] = useState(like | false);

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
    },
  };

  const CardDetails = () => {
    return (
      <View style={styles.cardDetailsContainer}>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star-shooting" size={30} color="gold" />
          <Text
            style={{
              fontSize: 23,
              marginLeft: 4,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {rating}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 2,
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            onLikeChanged && onLikeChanged(!isLiked);
            setIsLiked(!isLiked);
          }}
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
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={img} resizeMode="cover" />
      <CardDetails />
    </View>
  );
};

export default MovieCard;
