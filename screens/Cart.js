import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";

export default function Cart({ navigation, route }) {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.Btn}
          // onPress={() => navigation.navigate("ViewItem", { item: item })}
        >
          <Image style={styles.bckbtn} source={require("../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.paragraph}>Cart</Text>
      </View>

      <ScrollView style={styles.container2}>
        <View style={styles.itemcont}>
          <Image
            style={styles.itemPic}
            source={require("../assets/brocoli.jpeg")}
          />

          <Text style={styles.itemName}>Brocoli</Text>

          <Text style={styles.itemTotal}>
            Total of <Text style={styles.itemPrice}>$240</Text> by weight
          </Text>
          <Text style={styles.itempp}>
            <Text style={styles.itemPrice}>$20</Text>/kg
          </Text>

          <Text style={styles.itemQty}>
            Qty:
            <Text style={styles.itemPrice}> 20</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.itmsubtract}></TouchableOpacity>
        <TouchableOpacity style={styles.itmchange}>
          <Text style={styles.txtitm}>change</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.Btn2}>
        <Text style={styles.Btn2w}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 40,
    paddingTop: 5,
    width: 300,
    left: 60,
    paddingRight: 30,
  },
  Btn: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 60,
    top: 5,
    height: 50,
  },
  bckbtn: {
    alignItems: "center",
    paddingLeft: 15,
    width: 60,
    height: 30,
    top: 15,
  },
  Btn2: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    height: 70,
    backgroundColor: "#219653",
    borderRadius: 10,
  },
  Btn2w: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    width: 300,
    left: 10,
    paddingRight: 30,
    color: "white",
  },
  container2: {
    width: 350,
    height: 590,
    backgroundColor: "white",
    bottom: 20,
  },

  itemcont: {
    alignSelf: "center",
    width: 330,
    height: 100,
    backgroundColor: "white",
    marginVertical: 10,
    shadowColor: "black",
    elevation: 10,
    borderRadius: 10,
  },

  itemPic: {
    width: 60,
    top: 10,
    height: 60,
    left: 10,
  },

  itemName: {
    fontSize: 25,
    fontWeight: "900",
    bottom: 55,
    left: 85,
  },

  itemQty: {
    fontSize: 15,
    bottom: 75,
    left: 90,
    fontWeight: "500",
  },
  itemPrice: {
    fontWeight: "900",
  },
  itempp: {
    bottom: 40,
    left: 20,
    fontWeight: "500",
  },
  itemTotal: {
    fontSize: 15,
    bottom: 55,
    left: 85,
    fontWeight: "500",
  },
  itmsubtract: {
    backgroundColor: "black",
    width: 30,
    height: 10,
    bottom: 100,
    left: 290,
  },
  itemTXt: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subbtn: {
    width: 60,
    height: 50,
  },
  itmchange: {
    backgroundColor: "#219653",
    width: 75,
    height: 30,
    bottom: 55,
    left: 254,
    borderRadius: 10,
  },
  txtitm: {
    padding: 3,
    paddingLeft: 10,
    color: "white",
    fontSize: 17,
  },
  navbar: {
    width: "100%",
  },
});
