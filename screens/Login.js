import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../config/firebase";

const backImage = require("../assets/tecno.jpg");

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => handleSuccessfulLogin())
                .catch((err) => alert("Error in login" + err.message));
        }
    };

    const handleSuccessfulLogin = () => {

    }

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage}/>
            <View style={styles.whiteSheet}/>
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"//סוג מקלדת(@)
                    textContentType="emailAddress"
                    value={email}
                    autoFocus={true}//פותח ישר מקלדת
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

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={{fontWeight: "bold", color: "#fff", fontSize: 18}}>
                        Log In
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
                    <Text style={{color: "gray", fontWeight: "600", fontSize: 14}}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{color: '#8EBBFF', fontWeight: "600", fontSize: 14}}>
                            {" "}
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#8EBBFF',
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
        backgroundColor: "#8EBBFF",
        height: 58,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
});









