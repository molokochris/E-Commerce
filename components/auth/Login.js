import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "white",
          marginBottom: 200,
          top: 170,
          marginHorizontal: 108,
          right: 100,
        }}
      >
        Hello, Welcome. back!
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderTopRightRadius: 17,
          borderTopLeftRadius: 17,
          width: 400,
          height: 1000,
        }}
      >
        <Text style={{ color: "grey", width: 370, bottom: 70 }}>
          Let's learn with us again to improve and upgrade your skill with the
          best mentor and you will never regret
        </Text>
        <Text style={{ color: "black", fontWeight: "700", right: 130 }}>
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            borderWidth: 1,
            width: 320,
            padding: 10,
            borderColor: "black",
            borderRadius: 10,
            marginBottom: 20,
            color: "black",
          }}
        />
        <Text style={{ color: "black", fontWeight: "700", right: 120 }}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{
            borderWidth: 1,
            width: 320,
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            color: "black",
            borderColor: "black",
          }}
        />
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            marginLeft: 190,
            marginBottom: 20,
          }}
        >
          Forgot Password
        </Text>
        <TouchableOpacity style={styles.btn}>Login</TouchableOpacity>

        <Text style={{ color: "blue", fontWeight: "bold", top: 10 }}>
          Dont have an account? Register
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    color: "white",
    borderRadius: 10,
    backgroundColor: "blue",
    width: 320,
    height: 40,
    alignItems: "center",
    paddingTop: 11,
  },
});
export default Login;
