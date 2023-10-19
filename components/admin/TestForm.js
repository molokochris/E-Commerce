import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const categories = ["vegetables", "fruits", "meat", "fish"];
const Form = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const source = { uri: result.uri };
      setImage(source);
    }
  };

  const handleSubmit = async () => {
    if (productName && image && weight && price && selectedCategory) {
      const response = await fetch(image.uri);
      const blob = await response.blob();

      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${Date.now()}.jpg`);

      const uploadTask = imageRef.put(blob);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Upload Progress: ${progress}%`);
        },
        (error) => {
          console.log("Error uploading image: ", error);
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((imageUrl) => {
              firebase
                .firestore()
                .collection("forms")
                .add({
                  productName,
                  weight,
                  price,
                  category: selectedCategory,
                  imageUrl,
                })
                .then(() => {
                  setProductName("");
                  setWeight("");
                  setPrice("");
                  setSelectedCategory(categories[0]);
                  setImage(null);
                  Alert.alert("Form submitted successfully!");
                })
                .catch((error) => {
                  console.log("Error adding document: ", error);
                });
            })
            .catch((error) => {
              console.log("Error getting download URL: ", error);
            });
        }
      );
    } else {
      Alert.alert("Please fill in all fields");
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleProducts = () => {
    navigation.navigate("Products");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Admin</Text>
          <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
            <Icon style={{ color: "blue" }} name="menu" size={30} />
          </TouchableOpacity>
        </View>

        {showSidebar && (
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.sidebarItem}
              onPress={handleProducts}
            >
              <Text style={styles.sidebarText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
              <Text style={styles.sidebarText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        <Button title="Choose Image" onPress={handleChooseImage} />
        {image && <Image source={image} style={{ width: 200, height: 200 }} />}

        <Text style={styles.label}>Product Name:</Text>
        <TextInput
          value={productName}
          onChangeText={(value) => setProductName(value)}
          placeholder="Product Name"
          style={styles.input}
        />
        <Text style={styles.label}>Weight:</Text>
        <TextInput
          value={weight}
          onChangeText={(value) => setWeight(value)}
          placeholder="Weight"
          style={styles.input}
        />
        <Text style={styles.label}>Price:</Text>
        <TextInput
          value={price}
          onChangeText={(value) => setPrice(value)}
          placeholder="Price"
          style={styles.input}
        />
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }
          style={styles.picker}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: "blue",
    padding: 20,
  },
  sidebarItem: {
    marginBottom: 10,
  },
  sidebarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  uploadButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagePreview: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Form;
