import React from "react";
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
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
const TopData = [
  {
    id: "1",
    name: "Broccoli",
    description: "monate",
    weight: "500g",
    price: "$4/kg",
    image: require("../../assets/brocoli.jpeg"),
  },
  {
    id: "2",
    name: "Cedang",
    weight: "100g",
    price: "100RS/kg",
    image: require("../../assets/banana.jpeg"),
  },
];
const RecomData = [
  {
    id: "1",
    name: "Cedang",
    weight: "100g",
    price: "100RS/kg",
    image: require("../../assets/Avo.jpeg"),
  },
  {
    id: "2",
    name: "Cedang",
    weight: "100g",
    price: "100RS/kg",
    image: require("../../assets/oranges.jpeg"),
  },
];
const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemName}>Weight:{item.weight}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addIconContainer}>
        <Icon name="add-circle" size={30} color="green" />
      </TouchableOpacity>
    </View>
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
            <TouchableOpacity style={{ width: 50, marginHorizontal: 10 }}>
              <Text style={styles.categoryButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 80, marginHorizontal: 10 }}>
              <Text style={styles.categoryButtonText}>Vegatables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 60, marginHorizontal: 10 }}>
              <Text style={styles.categoryButtonText}>Fish</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 60, marginHorizontal: 10 }}>
              <Text style={styles.categoryButtonText}>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 60, marginHorizontal: 10 }}>
              <Text style={styles.categoryButtonText}>Meat</Text>
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
            data={TopData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              Recommendation
            </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>SHOW ALL</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={RecomData}
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
            <Icon
              style={{ color: "lightgrey" }}
              name="notification"
              size={30}
            />
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
    height: 100,
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
