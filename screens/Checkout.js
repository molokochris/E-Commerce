import { SafeAreaView } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Form,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";

export default function Checkout() {
  const [date, setDate] = React.useState("");
  const [name, setName] = React.useState("");
  const [cardnumber, setCardnumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [zip, setZip] = React.useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.detailsz}>
        <Text style={styles.orderH}>order summary</Text>
        <Text style={styles.orderP}>$0.00</Text>
        <FlatList
          style={{
            flexGrow: 0,
            backgroundColor: "white",
            top: "10%",
            height: "15%",
          }}
          // data={Data}
          renderItem={({ item }) => (
            <View style={styles.contV}>
              <Text style={styles.orderNQ}>{item.title}</Text>
              <Text style={styles.orderNQP}>{item.price}</Text>
              <Text style={styles.orderQty}>{item.QTY}x</Text>
            </View>
          )}
        />
        <Text style={styles.orderNQ}>Tax</Text>
        <Text style={styles.orderNQ}>Shipping</Text>
        <Text style={styles.orderNQ}>Total</Text>

        <Text style={styles.orderTxP}>$12</Text>
        <Text style={styles.orderTxP}>$1.2</Text>
        <Text style={styles.orderTxP}>$7</Text>

        <Text style={styles.creditCrd}>Credit card</Text>
        <TextInput
          style={styles.input}
          maxLength={40}
          onChangeText={setName}
          value={name}
        />

        <Text style={styles.inpName}>Name on card</Text>

        <TextInput
          style={styles.input2}
          maxLength={20}
          onChangeText={setCardnumber}
          value={cardnumber}
          keyboardType="numeric"
        />
        <Text style={styles.inpNo}>Card Number</Text>

        <TextInput
          style={styles.input3}
          maxLength={8}
          onChangeText={setExp}
          value={exp}
          keyboardType="numeric"
        />
        <Text style={styles.inpNo}>Exp</Text>

        <TextInput
          style={styles.input4}
          maxLength={4}
          onChangeText={setCvv}
          value={cvv}
          keyboardType="numeric"
        />
        <Text style={styles.inpCvv}>CVV</Text>
        <TextInput
          style={styles.input5}
          maxLength={40}
          onChangeText={setZip}
          value={zip}
          keyboardType="numeric"
        />
        <Text style={styles.inpZip}>ZIP</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardNo}>1111 1111 1111 1111</Text>
        <Text style={styles.cardHo}>Jonas NY</Text>
        <Text style={styles.cardExp}> Exp:10 36</Text>
        <Text style={styles.cardCvv}>CVV: 123</Text>
        <Image
          style={styles.cardlogo}
          source={require("../assets/cardlog.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("CheckoutSuccess", { status: "success" })
        }
      >
        <Text style={styles.buttonTxt}>Proceed to confirmation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
    alignItems: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#000000",
    width: "60%",
    borderRadius: 10,
    height: "17%",
    bottom: "48%",
    shadowRadius: 15,
    shadowColor: "black",
  },
  cardNo: {
    color: "#ffffff",
    fontSize: 18,
    left: "5%",
    top: "43%",
    fontWeight: "800",
  },
  cardHo: {
    color: "#ffffff",
    fontSize: 14,
    left: "5%",
    top: "45%",
    fontWeight: "700",
  },
  cardlogo: {
    height: "21%",
    width: "21%",
    left: "70%",
    bottom: "51%",
  },
  cardCvv: {
    color: "#ffffff",
    fontSize: 12,
    left: "65%",
    top: "35%",
    fontWeight: "500",
  },
  cardExp: {
    color: "#ffffff",
    fontSize: 14,
    left: "5%",
    top: "48%",
    fontWeight: "700",
  },
  detailsz: {
    top: "23%",
    right: 0,
    width: 300,
    backgroundColor: "white",
    height: "60%",
  },
  orderH: {
    fontWeight: "900",
    fontSize: 30,
    top: "11%",
    alignSelf: "center",
  },

  orderP: {
    fontWeight: "500",
    fontSize: 30,
    top: "9%",
    left: "15%",
  },
  orderNQ: {
    fontWeight: "500",
    fontSize: 20,
    left: "10%",
    top: "11%",
  },
  orderNQP: {
    fontWeight: "500",
    fontSize: 20,
    left: "80%",
    bottom: "60%",
  },

  orderQty: {
    fontWeight: "500",
    fontSize: 20,
    left: "10%",
    bottom: "135%",
  },
  contV: {
    backgroundColor: "white",
    height: "30%",
    marginHorizontal: 0,
  },

  orderTxP: {
    fontWeight: "500",
    fontSize: 20,
    left: "80%",
    bottom: "15%",
  },

  input: {
    height: "9%",
    fontSize: 20,
    borderBottomWidth: 4,
    fontWeight: "600",
    width: "79%",
    bottom: "5%",
    alignSelf: "center",
  },

  creditCrd: {
    fontWeight: "900",
    fontSize: 25,
    left: "10%",
    bottom: "6.5%",
  },
  input2: {
    height: "9%",
    fontSize: 20,
    borderBottomWidth: 4,
    fontWeight: "600",
    width: "79%",
    bottom: "7%",

    alignSelf: "center",
  },
  inpName: {
    fontWeight: "600",
    fontSize: 18,
    left: "10.5%",
    bottom: "6%",
  },
  inpNo: {
    fontWeight: "700",
    fontSize: 18,
    left: "10.5%",
    bottom: "8%",
  },

  input3: {
    height: "9%",
    fontSize: 20,
    borderBottomWidth: 4,
    fontWeight: "600",
    left: "10.5%",
    width: "20%",
    bottom: "7%",
  },

  input4: {
    height: "9%",
    fontSize: 20,
    borderBottomWidth: 4,
    fontWeight: "800",
    left: "40%",
    width: "20%",
    bottom: "21.5%",
  },

  inpCvv: {
    fontWeight: "700",
    fontSize: 18,
    left: "40%",
    bottom: "22%",
  },

  input5: {
    height: "9%",
    fontSize: 28,
    borderBottomWidth: 4,
    fontWeight: "800",
    left: "70%",
    width: "20%",
    bottom: "36%",
  },

  inpZip: {
    fontWeight: "700",
    fontSize: 18,
    left: "70%",
    bottom: "36.5%",
  },

  button: {
    top: "10%",
    alignItems: "center",
    backgroundColor: "#219653",
    paddingTop: "5%",
    height: "10%",
    borderRadius: 10,
    width: "85%",
  },
  buttonTxt: {
    fontWeight: "600",
    fontSize: 25,
    color: "white",
  },

  buttonBCK: {
    bottom: "85%",
    alignItems: "center",
    backgroundColor: "#ffdab9",
    paddingTop: 20,
    height: 70,
    borderRadius: 10,
    width: 70,
    right: 150,
  },
});
