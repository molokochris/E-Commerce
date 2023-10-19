import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { useNavigation } from "@react-navigation/core";

const firebaseConfig = {
  apiKey: "AIzaSyCXQpFF1n301P_jpAk8Gxh2hYr1VdDy-Xg",
  authDomain: "e-commerce-284f2.firebaseapp.com",
  projectId: "e-commerce-284f2",
  storageBucket: "e-commerce-284f2.appspot.com",
  messagingSenderId: "652686747106",
  appId: "1:652686747106:web:dbc2cb357c6722f5af85bb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

const Home = () => {
  const [topData, setTopData] = useState([]);
  const [recomData, setRecomData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigation();

  //Add Items to Cart
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (item) => {
    const isAvailItem = cartItems.find((i) => i.id === item.id);
    if (isAvailItem) {
      setCartItems(
        cartItems.map((i) => {
          if (i.id === item.id) {
            return { ...i, qty: i.qty + 1 };
          }
          return i;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  // console.log(cartItems);
  const fetchProducts = async () => {
    try {
      const productsSnapshot = await db.collection("products").get();
      const data = [];

      for (const doc of productsSnapshot.docs) {
        const productData = doc.data();
        const imageRef = storage.refFromURL(productData.image);
        const imageUrl = await imageRef.getDownloadURL();
        data.push({
          id: doc.id,
          ...productData,
          imageURL: imageUrl,
          category: productData.category,
        });
      }

      setTopData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate("ViewItem", { item: item })}
    >
      <Image source={{ uri: item.imageURL }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.productName}</Text>
      <Text style={styles.itemName}>Weight: {item.weight}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addIconContainer}
        onPress={() => addToCart(item)}
      >
        <Icon name="add-circle" size={30} color="green" />
      </TouchableOpacity>
    </Pressable>
  );

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTopData = topData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "whitesmoke" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Good Morning
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>Daliyan</Text>
            <Text style={{ fontWeight: "light", fontSize: 16 }}>
              <Icon name="location" size={15} />
              Kodawatha. Sri Lanka
            </Text>
          </View>
          <Card style={{ borderRadius: 5 }}>
            <TouchableOpacity>
              <Icon name="person" size={30} />
            </TouchableOpacity>
          </Card>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Search" />
            <TouchableOpacity style={styles.searchIconContainer}>
              <Icon name="search" size={15} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="filter" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryButtons}>
            <TouchableOpacity
              style={{ width: 50, marginHorizontal: 10 }}
              onPress={() => filterProductsByCategory("All")}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === "All" && { fontWeight: "bold" },
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 80, marginHorizontal: 10 }}
              onPress={() => filterProductsByCategory("Vegetables")}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === "Vegetables" && { fontWeight: "bold" },
                ]}
              >
                Vegetables
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 60, marginHorizontal: 10 }}
              onPress={() => filterProductsByCategory("Fish")}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === "Fish" && { fontWeight: "bold" },
                ]}
              >
                Fish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 60, marginHorizontal: 10 }}
              onPress={() => filterProductsByCategory("Fruits")}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === "Fruits" && { fontWeight: "bold" },
                ]}
              >
                Fruits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 60, marginHorizontal: 10 }}
              onPress={() => filterProductsByCategory("Meat")}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === "Meat" && { fontWeight: "bold" },
                ]}
              >
                Meat
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              Top Products
            </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>SHOW ALL</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredTopData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 16,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity>
            <Icon style={{ color: "green" }} name="home" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={{ color: "lightgrey" }} name="search" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={{ color: "lightgrey" }} name="cart" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={{ color: "lightgrey" }} name="person" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 270,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    padding: 6,
  },
  input: {
    flex: 1,
  },
  searchIconContainer: {
    padding: 5,
  },
  addIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    height: 40,
  },
  categoryButtonText: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 16,
  },
  itemsContainer: {
    width: "100%",
  },
});
export default Home;
