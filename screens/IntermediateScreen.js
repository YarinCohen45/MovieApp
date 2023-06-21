import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import MovieCardScroller from "../components/MovieCardScroller";
import { fetchMovies } from "../Api";

const IntermediateScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MovieCardScroller
        data={[
          {
            name: "Hello",
            rating: 8.9,
            img: require("../assets/example_background.jpg"),
          },
          {
            name: "Hello 2",
            rating: 3.2,
            img: require("../assets/example_background.jpg"),
          },
          {
            name: "Hello 3",
            rating: 6.8,
            img: require("../assets/example_background.jpg"),
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  searchBar: {
    width: "90%",
    height: 30,
    borderColor: "#137850",
    borderWidth: 2,
    borderRadius: 20,
    fontWeight: "bold",
    fontColor: "black",
    marginBottom: 20,
    fontColor: "#137850",
  },
});

export default IntermediateScreen;
