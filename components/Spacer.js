import {View} from "react-native";
import React from "react";

const Spacer = ({size, horizontal}) => {
    return <View style={{[horizontal ? "width" : "height"]: size}}/>;
}

export default Spacer;
