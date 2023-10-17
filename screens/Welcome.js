import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>ECommerce</Text>
        <Text style={styles.subtitle}>Buy easily on our online platform</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.loginButton}>
              <Text style={{ color: "blue", fontWeight:'bold' }}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <View style={styles.registerButton}>
              <Text style={{ color: "white" , fontWeight: 'bold'}}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 500,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "col",
    justifyContent: "space-between",
  },
  loginButton: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 10,
  },
  registerButton: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 16,
  },
});
