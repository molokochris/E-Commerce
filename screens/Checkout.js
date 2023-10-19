import {
  Text,
  View,
  StyleSheet,
  Image,
  Form,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Checkout() {
  const [date, setDate] = React.useState("");
  const [name, setName] = React.useState("");
  const [cardnumber, setCardnumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [zip, setZip] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardNo}>1111 1111 1111 1111</Text>
        <Text style={styles.cardHo}>nigga NY</Text>
        <Text style={styles.cardExp}> Exp:10 36</Text>
        <Text style={styles.cardCvv}>CVV: 123</Text>
        <Image
          style={styles.cardlogo}
          source={require("../assets/cardlog.png")}
        />
      </View>
      <View style={styles.detailsz}>
        <Text style={styles.orderH}>order summary</Text>
        <Text style={styles.orderP}>$48.59</Text>
        <Text style={styles.orderNQ}>1xTop notch sweater</Text>
        <Text style={styles.orderTx}>Tax</Text>
        <Text style={styles.shipping}>Shipping</Text>
        <Text style={styles.creditCrd}>Credit card</Text>

        <Text style={styles.orderNQP}>$12</Text>
        <Text style={styles.orderTxP}>$1.2</Text>
        <Text style={styles.shippingP}>$7</Text>

        <TextInput
          style={styles.input}
          maxLength={40}
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.inpName}>Name on card</Text>
        <TextInput
          style={styles.input2}
          maxLength={40}
          onChangeText={setCardnumber}
          value={cardnumber}
          keyboardType="numeric"
        />
        <Text style={styles.inpNo}>Card Number</Text>
        <TextInput
          style={styles.input3}
          maxLength={40}
          onChangeText={setCardnumber}
          value={exp}
          keyboardType="numeric"
        />
        <Text style={styles.inpNo}>Exp</Text>
        <TextInput
          style={styles.input4}
          maxLength={40}
          onChangeText={setCardnumber}
          value={exp}
          keyboardType="numeric"
        />
        <Text style={styles.inpCvv}>CVV</Text>

        <Text style={styles.inpZip}>ZIP</Text>
        <TextInput
          style={styles.input5}
          maxLength={40}
          onChangeText={setCardnumber}
          value={zip}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Proceed to confirmation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBCK}>
        <Text style={styles.buttonBck}>⇦</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    height: 450,
    width: 340,
    backgroundColor: "white",
    left: 20,
    borderRadius: 10,
    bottom: -60,
  },

  card: {
    backgroundColor: "#000000",
    width: 240,
    borderRadius: 20,
    height: 135,
    top: 20,
    shadowColor: "#000000",
    shadowRadius: 15,
    shadowOpacity: 80,
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 5,
    shadowOffset: { width: 10, height: 10 },
  },
  cardNo: {
    color: "#ffffff",
    fontSize: 18,
    left: 20,
    bottom: -55,
    // fontWeight: 800,
  },
  cardHo: {
    color: "#ffffff",
    fontSize: 14,
    left: 20,
    bottom: -65,
    // fontWeight: 700,
  },
  cardExp: {
    color: "#ffffff",
    fontSize: 14,
    left: 17,
    bottom: -70,
    fontWeight: 700,
  },
  cardCvv: {
    color: "#ffffff",
    fontSize: 14,
    left: 170,
    bottom: -50,
    fontWeight: 700,
  },

  cardlogo: {
    height: 30,
    width: 50,
    left: 180,
    bottom: 55,
  },
  orderH: {
    fontWeight: 900,
    fontSize: 30,
    left: 30,
  },
  orderP: {
    fontWeight: 500,
    fontSize: 30,
    left: 30,
  },
  orderNQ: {
    fontWeight: 500,
    fontSize: 20,
    left: 30,
  },
  orderTx: {
    fontWeight: 500,
    fontSize: 20,
    left: 30,
  },
  shipping: {
    fontWeight: 500,
    fontSize: 20,
    left: 30,
  },
  detailsz: {
    top: 30,
    right: 0,
    width: 300,
    backgroundColor: "white",
    height: 378,
  },
  creditCrd: {
    fontWeight: 900,
    fontSize: 30,
    left: 30,
    bottom: -10,
  },
  input: {
    height: 40,
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: 600,
    left: 30,
    width: 230,
    bottom: 60,
  },
  input2: {
    height: 40,
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: 600,
    left: 30,
    width: 230,
    bottom: 60,
  },
  inpName: {
    fontWeight: 500,
    fontSize: 18,
    left: 30,
    bottom: 60,
  },
  inpNo: {
    fontWeight: 700,
    fontSize: 18,
    left: 30,
    bottom: 60,
  },
  input3: {
    height: 40,
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: 600,
    left: 30,
    width: 60,
    bottom: 60,
  },
  input4: {
    height: 40,
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: 800,
    left: 115,
    width: 60,
    bottom: 123,
  },
  inpCvv: {
    fontWeight: 700,
    fontSize: 18,
    left: 115,
    bottom: 122,
  },
  input5: {
    height: 40,
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: 800,
    left: 200,
    width: 60,
    bottom: 207,
  },
  inpZip: {
    fontWeight: 700,
    fontSize: 18,
    left: 200,
    bottom: 142,
  },
  button: {
    bottom: -70,
    alignItems: "center",
    backgroundColor: "#4169e1",
    paddingTop: 20,
    height: 70,

    borderRadius: 10,
    width: 340,
  },
  buttonTxt: {
    fontWeight: 600,
    fontSize: 25,
    color: "white",
  },
  orderNQP: {
    fontWeight: 500,
    fontSize: 20,
    left: 240,
    bottom: 108,
  },
  orderTxP: {
    fontWeight: 500,
    fontSize: 20,
    left: 240,
    bottom: 108,
  },
  shippingP: {
    fontWeight: 500,
    fontSize: 20,
    left: 240,
    bottom: 108,
  },
  buttonBck: {
    fontWeight: 600,
    fontSize: 25,
    color: "black",
  },
  buttonBCK: {
    bottom: 690,
    alignItems: "center",
    backgroundColor: "#ffdab9",
    paddingTop: 20,
    height: 70,
    borderRadius: 10,
    width: 70,
    right: 140,
  },
});
