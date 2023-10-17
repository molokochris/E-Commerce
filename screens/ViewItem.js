import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import redPeppers from "../../assets/peppers.jpg";
import back from "../../assets/back.png";
import heart from "../../assets/heart.png";
import inventory from "../../assets/inventory.png";
import rating from "../../assets/rating.png";
import { useState } from "react";
import { FlatList } from "react-native";
// import OnboardingItem from "./components/OnboardingItem";

export default function ViewItem() {
  // let images = [
  //   { id: 1, image: require("./assets/peppers.jpg") },
  //   { id: 2, image: require("./assets/peppers1.jpg") },
  //   { id: 3, image: require("./assets/peppers2.jpg") },
  //   { id: 4, image: require("./assets/peppers3.jpg") },
  // ];
  const [size, setSize] = useState(15);

  const increment = () => {
    setSize(size + 15);
  };
  const decrement = () => {
    setSize(size - 15);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <StatusBar translucent={false} backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.head, { alignItems: "center" }]}>
          <Image source={back} style={{ width: 50, height: 20 }} />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: 70,
            }}
          >
            Bell Pepper
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontWeight: 500, fontSize: 18, color: "#219653" }}>
            R 4,99 / Kg
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          {/* <FlatList
            data={images}
            renderItem={({ item }) => <OnboardingItem item={item} />}
          /> */}
          <Image
            source={redPeppers}
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
            onPress={increment}
            style={{
              height: 40,
              width: 40,
              backgroundColor: "whitesmoke",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
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
            <Text>{size}</Text>
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
      <View style={{ flexDirection: "row", paddingBottom: 10, paddingTop: 5 }}>
        {/* <Image source={heart} style={{ width: 100, height: 200 }} /> */}
        <Image
          source={heart}
          style={{
            resizeMode: "center",
            height: 60,
            width: "20%",
            backgroundColor: "#F2F3F4",
            marginRight: "5%",
            borderRadius: 8,
          }}
        />
        <Pressable
          style={{
            width: "75%",
            backgroundColor: "#219653",
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "whitesmoke", fontWeight: "bold" }}>
            Add to cart
          </Text>
        </Pressable>
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
