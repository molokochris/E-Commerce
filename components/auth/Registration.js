import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Registration() {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCXQpFF1n301P_jpAk8Gxh2hYr1VdDy-Xg",
    authDomain: "e-commerce-284f2.firebaseapp.com",
    projectId: "e-commerce-284f2",
    storageBucket: "e-commerce-284f2.appspot.com",
    messagingSenderId: "652686747106",
    appId: "1:652686747106:web:dbc2cb357c6722f5af85bb"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const signUp = async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(response);
      alert("Registered successfully");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text
          style={{
            marginTop: 50,
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Register
        </Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Account
        </Text>
      </View>
      <View style={styles.logincard}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "blue", margin: 20, fontWeight: "bold" }}>
            ECommerce App
          </Text>
        </View>

        <Text style={{ color: "grey", marginLeft: 20, fontSize: 10 }}>
          Use the text generator to create your own text! The Lorem Ipsum online
          text generator creates fictitious, fake, causal, or placeholder text.
        </Text>
        <View style={{ margin: 20 }}>
          <Text>Fullnames</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
          <Text style={{ marginTop: 20 }}>Email</Text>
          <TextInput
            style={{ borderWidth: 1, borderRadius: 10 }}
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>

          <Text style={{ marginTop: 20 }}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 5 }}
              name={isPasswordSecure ? "eye-off" : "eye"}
              size={28}
              onPress={() =>
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true)
              }
            />
            <TextInput
              secureTextEntry={isPasswordSecure}
              style={{ width: "100%" }}
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Text style={{ marginTop: 20 }}>Confirm Password</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 5 }}
              name={isPasswordSecure ? "eye-off" : "eye"}
              size={28}
              onPress={() =>
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true)
              }
            />
            <TextInput
              secureTextEntry={isPasswordSecure}
              style={{ width: "50%" }}
              value={confirmPassword}
              autoCapitalize="none"
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>

          <TouchableOpacity onPress={signUp}>
            <View
              style={{
                marginTop: 80,
                backgroundColor: "blue",
                height: 40,
                color: "blue",
                borderWidth: 1,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                borderRadius: 16              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Create Account
              </Text>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Already have an account?{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    flex: 0.3,
    backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logincard: {
    flex: 0.7,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
  },
});