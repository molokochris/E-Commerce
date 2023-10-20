import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Checkout({ navigation, route }) {
  const { status } = route.params;

  // Example URLs for online images
  const successImageUrl =
    "https://via.placeholder.com/150/00FF00/000000?text=Success"; // Placeholder for success image
  const failureImageUrl =
    "https://via.placeholder.com/150/FF0000/000000?text=Failure"; // Placeholder for failure image

  return (
    <View style={styles.container}>
      {status === "success" ? (
        <View style={styles.successContainer}>
          <Image source={{ uri: successImageUrl }} style={styles.image} />
          <Text style={styles.statusText}>Order Successful!</Text>
          <Text style={styles.statusMessage}>Thank you for your order.</Text>
        </View>
      ) : (
        <View style={styles.failureContainer}>
          <Image source={{ uri: failureImageUrl }} style={styles.image} />
          <Text style={styles.statusText}>Order Failed</Text>
          <Text style={styles.statusMessage}>
            Oops! Something went wrong with your order.
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  successContainer: {
    alignItems: "center",
  },
  failureContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statusMessage: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4169e1",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
