import React from "react";
import {View, Dimensions, Text} from "react-native";
import MovieCard from "./MovieCard";
import Carousel from "react-native-new-snap-carousel";

const MovieCardScroller = (props) => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginBottom: 10,
                    color: "#F4F5FC",
                }}>{props.title || 'Movies'}</Text>
            <View
                style={{
                    height: 'auto',
                    width: '100%',
                    marginVertical: 10,
                    marginBottom: 20,
                }}>
                <Carousel
                    layout="default"
                    renderItem={(item) => {
                        return <MovieCard
                            item={item.item}
                            onLikeChanged={isLiked => {
                                item.item.like = isLiked;
                                props.onLikeChanged && props.onLikeChanged(item.item);
                            }}/>;
                    }}
                    data={props.data}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width * 0.8 + 10}
                    enableSnap
                    loop
                    inactiveSlideScale={.93}
                    inactiveSlideOpacity={0.5}
                    lockScrollWhileSnapping
                    callbackOffsetMargin={3}
                />
            </View>
        </View>
    );
};

export default MovieCardScroller;
