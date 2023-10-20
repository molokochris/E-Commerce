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
import { useNavigation } from "@react-navigation/core";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../components/auth/FirebaseConfig";

const Home = () => {
  const [topData, setTopData] = useState([]);
  const [recomData, setRecomData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigation();

  //Add Items to Cart
  // console.log(cartItems);

  // console.log(cartItems);
  var arayProd = [];
  const fetchProducts = async () => {
    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", selectedCategory.trim().toLocaleLowerCase())
      );
      const all = collection(db, "products");
      const querySnapshot = await getDocs(selectedCategory == "All" ? all : q);
      arayProd = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log("got data");
        //console.log(doc.id, " => ", doc.data());
        arayProd.push({ id: doc.id, ...doc.data() });
      });
      setTopData(arayProd);
    } catch (error) {
      console.log(error);
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
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.productName}</Text>
      <Text style={styles.itemName}>Weight: {item.weight}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addIconContainer}
        // onPress={() => addToCart(item)}
      >
        <Icon name="add-circle" size={30} color="green" />
      </TouchableOpacity>
    </Pressable>
  );

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    fetchProducts();
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
            data={topData}
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
