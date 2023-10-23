import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CheckoutSuccess = ({ route }) => {
  const { status } = route.params;

  return (
    <View style={styles.container}>
      {status === "success" ? (
        <View>
          <Text style={styles.successText}>Checkout Successful</Text>
          <Text>Your order has been successfully processed.</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.failureText}>Checkout Failed</Text>
          <Text>
            There was an issue with your order. Please try again later.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: 24,
    color: "green",
  },
  failureText: {
    fontSize: 24,
    color: "red",
  },
});

export default CheckoutSuccess;
