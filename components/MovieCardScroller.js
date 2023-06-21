import React from "react";
import { View, Dimensions } from "react-native";
import MovieCard from "./MovieCard";
import Carousel from "react-native-new-snap-carousel";

const MovieCardScroller = (props) => {
  return (
    <View>
      <Carousel
        layout="default"
        renderItem={(item) => {
          return <MovieCard item={item.item} />;
        }}
        data={props.data}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.8}
      />
    </View>
  );
};

export default MovieCardScroller;
