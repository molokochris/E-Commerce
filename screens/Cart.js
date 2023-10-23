import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { db } from "../components/auth/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Cart({ navigation, route }) {
  // const { item } = route.params;
  // const userID = route.params.userID;
  const userID = "45DtSb18bQgNRuCN76Py7NWHBG03";
  // const arrayCartItems = route.params;
  const [cartItems, setCartItems] = useState([]);
  // const renderCart = cartItems.map((item) => ({ id: doc.id, ...doc.data() }));
  const fetchProducts = async () => {
    console.log("objec2t");
    try {
      const q = query(
        collection(db, "cartItems"),
        where("userID", "==", userID)
      );
      const all = collection(db, "cartItems");
      const querySnapshot = await getDocs(q);
      let arrayCart = [];
      querySnapshot.forEach((doc) => {
        arrayCart.push({ id: doc.id, ...doc.data() });
      });
      console.log("Hello");
      console.log("arraycart:", arrayCart);
      setCartItems(arrayCart);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("object");
    fetchProducts();
  }, []);

  // console.log("CartArrayItems", arrayCartItems);
  console.log(cartItems);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.bckbtn} source={require("../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.paragraph}>Cart</Text>
      </View>

      <ScrollView style={styles.container2}>
        {cartItems.map((item) => {
          return (
            <View
              style={{
                width: "100%",
                height: 150,
                marginBottom: 4,
                backgroundColor: "whitesmoke",
                alignSelf: "center",
                flexDirection: "row",
                borderRadius: 8,
                borderWidth: 0.2,
              }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: 140,
                  height: 140,
                  alignSelf: "center",
                  marginLeft: 5,
                  marginRight: 8,
                  borderRadius: 8,
                  resizeMode: "center",
                }}
              />
              <View style={{ alignSelf: "center" }}>
                <Text>{item.productName}</Text>
                <Text>{item.weight}</Text>
                <Text>{item.price}</Text>
                <Text>{item.qty}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.Btn2}
        onPress={() => navigation.navigate("Checkout", { status: "success" })}
      >
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
    flex: 1,
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
    resizeMode: "center",
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
