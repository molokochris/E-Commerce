import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import redPeppers from "../assets/peppers.jpg";
import back from "../assets/back.png";
// import heart from "../assets/heart.png";
import inventory from "../assets/inventory.png";
import rating from "../assets/rating.png";
import { useState } from "react";
import { FlatList } from "react-native";
import { tomato } from "color-name";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import OnboardingItem from "./components/OnboardingItem";

export default function ViewItem({ navigation, route }) {
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(false);
  const { item } = route.params;
  const [isAdded, setIsAdded] = useState(false);
  console.log(item);
  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    setQty(qty - 1);
  };
  // const userID = route.params.userID;
  const userID = "45DtSb18bQgNRuCN76Py7NWHBG03";

  console.log("ViewItemID:", userID);
  // async function saveCartData(item) {
  //   try {
  //     const cartData = item;
  //     await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
  //     alert("item added to cart successfully");
  //     setIsAdded(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function saveCartData(item) {
    try {
      // Retrieve existing cart data from AsyncStorage and parse it
      const cartData = await AsyncStorage.getItem("cartData");
      let cartArray = [];

      if (cartData) {
        cartArray = JSON.parse(cartData);
      }

      // Add the new item to the cart
      cartArray.push(item);

      await AsyncStorage.setItem("cartData", JSON.stringify(cartArray));
      alert("Item added to the cart successfully");
      setIsAdded(true);
    } catch (error) {
      console.log(error);
    }
  }

  const addToCart = (item) => {
    item.qty = qty;
    item.userID = userID.uid;

    firebase
      .firestore()
      .collection("cartItems")
      .add(item)
      .then(() => {
        setIsAdded(true);
        alert("product added successfully!");
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
    //           })
    //           .catch((error) => {
    //             console.log("Error getting download URL: ", error);
    //           });
    //       }
    //     );
    //   } else {
    //     Alert.alert("Please fill in all fields");
    //   }
    // };
    // saveCartData(item);

    // navigation.navigate("Cart", { item: item });
    console.log(item);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <StatusBar translucent={false} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.head, { alignItems: "center" }]}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={back} style={{ width: 50, height: 20 }} />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: 70,
            }}
          >
            {item.productName}
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontWeight: 500, fontSize: 18, color: "#219653" }}>
            {item.weight}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              resizeMode: "center",
              width: "90%",
              height: 400,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
        </View>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Pressable
            style={{
              height: 40,
              width: 40,
              backgroundColor: "whitesmoke",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={decrement}
            disabled={qty < 2 ? true : false}
          >
            <Text style={{ color: "gray", fontSize: 20, fontWeight: 500 }}>
              -
            </Text>
          </Pressable>
          <View
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{qty}</Text>
          </View>
          <Pressable
            style={{
              height: 40,
              width: 40,
              backgroundColor: "whitesmoke",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={increment}
          >
            <Text style={{ color: "gray", fontSize: 20, fontWeight: 500 }}>
              +
            </Text>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Product Details
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                paddingRight: 10,
                paddingVertical: 12,
                justifyContent: "center",
              }}
            >
              <Image source={inventory} style={{ marginRight: 10 }} />
              Available In Stock
            </Text>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 12,
                justifyContent: "center",
              }}
            >
              <Image source={rating} style={{ marginRight: 10 }} />
              4.8 Rating
            </Text>
          </View>
          <View style={{ marginBottom: 90 }}>
            <Text style={{ fontSize: 14 }}>
              Bell Peppers are fruits that belong to the nightshade family.They
              are related to chili peppers, tomatoes and breadfruit.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingBottom: 10,
          paddingTop: 5,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            width: "20%",
            borderRadius: 8,
            backgroundColor: "whitesmoke",
            marginRight: "5%",
          }}
        >
          <TouchableOpacity onPress={() => setWish(!wish)}>
            <Image
              source={
                wish
                  ? require("../assets/heart2.png")
                  : require("../assets/heart.png")
              }
              style={{
                width: 60,
                resizeMode: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "75%",
            backgroundColor: "#219653",
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 8,
          }}
          onPress={() => {
            isAdded
              ? navigation.navigate("Cart", { item: item, userID })
              : addToCart(item);
          }}
        >
          <Text style={{ color: "whitesmoke", fontWeight: "bold" }}>
            {isAdded ? "Go to cart" : "Add to cart"}
          </Text>
        </TouchableOpacity>
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
  head: {
    marginTop: 30,
    // paddingHorizontal: 15,
    flexDirection: "row",
  },
});
