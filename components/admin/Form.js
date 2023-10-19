<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import firebase from 'firebase/compat/app';
import { Picker } from '@react-native-picker/picker';
import 'firebase/firestore';
import * as ImagePicker from "expo-image-picker";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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

const categories = ["vegetables", "fruits", "meat", "fish"];

const FormPage = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [image, setImage] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleFormSubmit = async () => {
    try {
      const imageUrl = await uploadImage();
      await db.collection("products").add({
        productName,
        weight,
        price,
        category: selectedCategory,
        image: imageUrl,
      });

      setProductName("");
      setWeight("");
      setPrice("");
      setSelectedCategory(categories[0]);
      setImage(null);

      alert("Product created successfully!");
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = `images/${new Date().getTime()}`;
      const ref = storage.ref().child(filename);
  
    
      let contentType = 'image/jpeg';
      const fileExtension = filename.split('.').pop().toLowerCase();
      if (fileExtension === 'png') {
        contentType = 'image/png';
      }
  
      const metadata = {
        contentType,
      };
  
      await ref.put(blob, metadata);
      const downloadURL = await ref.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
    
      return null; 
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello Admin</Text>
        <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
          <Icon style={{ color: "blue" }} name="menu" size={30} />
        </TouchableOpacity>
      </View>
      {showSidebar && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sidebarItem} onPress={handleProducts}>
            <Text style={styles.sidebarText}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.label}>Upload Picture:</Text>
      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Pick an image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <Text style={styles.label}>Product Name:</Text>
      <TextInput
        value={productName}
        onChangeText={(text) => setProductName(text)}
        placeholder="Product Name"
        style={styles.input}
      />
      <Text style={styles.label}>Weight:</Text>
      <TextInput
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight"
        style={styles.input}
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder="Price"
        style={styles.input}
      />
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>
      <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
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

export default FormPage;
