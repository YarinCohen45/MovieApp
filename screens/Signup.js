import React, { useState, useContext } from "react";
import { AuthenticatedUserContext } from "../App";
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const backImage = require("../assets/icon.png");

export default function Signup({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  // const { setUser } = useContext(AuthenticatedUserContext);

  const saveAge = () => {
    setAge(age);
  };

  const handleSignup = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        
        .then(userDetails => {
          const user = userDetails.user;
          updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
            photoURL: null

          }).then(() => navigation.navigate('Home'))
        })
        .catch((err) => alert("Error in Signup" + err.message));
    }
  };

  return (
    
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView Vertical
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={true}
              onScrollBeginDrag={40}
              >
        <TextInput
          style={styles.input}
          placeholder="FirstName"
          autoCapitalize="words"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="LastName"
          autoCapitalize="words"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          autoFocus={true}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password" 
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Picker
          selectedValue={age}
          onValueChange={(text) => setAge(text)}
        >
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
        <View>
        <Text>Your age is: {age}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            Already have account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container1: {
  //   flexGrow: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal:0,
  // },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});