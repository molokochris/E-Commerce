// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "blue",
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 24,
//           fontWeight: "bold",
//           marginBottom: 20,
//           color: "white",
//           marginBottom: 200,
//           top: 170,
//           marginHorizontal: 108,
//           right: 100,
//         }}
//       >
//         Hello, Welcome. back!
//       </Text>

//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "white",
//           borderTopRightRadius: 17,
//           borderTopLeftRadius: 17,
//           width: 400,
//           height: 1000,
//         }}
//       >
//         <Text style={{ color: "grey", width: 370, bottom: 70 }}>
//           Let's learn with us again to improve and upgrade your skill with the
//           best mentor and you will never regret
//         </Text>
//         <Text style={{ color: "black", fontWeight: "700", right: 130 }}>
//           Email
//         </Text>
//         <TextInput
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           style={{
//             borderWidth: 1,
//             width: 320,
//             padding: 10,
//             borderColor: "black",
//             borderRadius: 10,
//             marginBottom: 20,
//             color: "black",
//           }}
//         />
//         <Text style={{ color: "black", fontWeight: "700", right: 120 }}>
//           Password
//         </Text>
//         <TextInput
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           secureTextEntry
//           style={{
//             borderWidth: 1,
//             width: 320,
//             padding: 10,
//             borderRadius: 10,
//             marginBottom: 20,
//             color: "black",
//             borderColor: "black",
//           }}
//         />
//         <Text
//           style={{
//             color: "blue",
//             fontWeight: "bold",
//             marginLeft: 190,
//             marginBottom: 20,
//           }}
//         >
//           Forgot Password
//         </Text>
//         <TouchableOpacity style={styles.btn}>Login</TouchableOpacity>

//         <Text style={{ color: "blue", fontWeight: "bold", top: 10 }}>
//           Dont have an account? Register
//         </Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   btn: {
//     color: "white",
//     borderRadius: 10,
//     backgroundColor: "blue",
//     width: 320,
//     height: 40,
//     alignItems: "center",
//     paddingTop: 11,
//   },
// });
// export default Login;

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text
          style={{
            marginTop: 150,
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Hello,
        </Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Wecome back!
        </Text>
      </View>
      <View style={styles.logincard}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "blue", margin: 20, fontWeight: "bold" }}>
            @
          </Text>
          <Text style={{ color: "blue", margin: 20, fontWeight: "bold" }}>
            ECommerce App
          </Text>
        </View>

        <Text style={{ color: "grey", marginLeft: 20, fontSize: 10 }}>
          Use the text generator to create your own text! The Lorem Ipsum online
          text generator creates fictitious, fake, causal, or placeholder text.
        </Text>
        <View style={{ margin: 20 }}>
          <Text>Email</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
          <Text style={{ marginTop: 20 }}>Password</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
          <Text
            style={{ textAlign: "right", color: "blue", fontWeight: "bold" }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity>
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
                borderRadius: 16,
              }}
            >
              <Text
                style={{ color: "white" }}
                onPress={() => navigation.navigate("Home")}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "blue" }}>Don't you have account?</Text>
            <Text style={{ color: "orange", fontWeight: "bold" }}>
              Create one
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  welcome: {
    flex: 1,
    backgroundColor: "",
    marginTop: 30,
  },
  logincard: {
    flex: 2,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 16,
  },
});
