import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from 'expo-image-picker';
import firebase from "firebase/compat/app";
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

  const [showSidebar, setShowSidebar] = useState(false);

  const handleFormSubmit = async () => {
    try {
      
      
      await db.collection("products").add({
        productName,
        weight,
        price,
        category: selectedCategory,
        image: image.uri,
      });
      uploadImage();
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

  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false) 


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1
    });
    const source = {uri: result.assets[0].uri}
    console.log(source)
    setImage(source)
};

const uploadImage = async () => {
  setUploading(true)
  const response = await fetch(image.uri)
  const blob = response.blob()
  const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
  var ref = firebase.storage().ref().child(filename).put(blob)
  try {
      await ref;
  } catch (e){
      console.log(e)
  }
  setUploading(false)
  Alert.alert(
      'Photo uploaded!'
  );
  setImage(null);
} 



  

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
          <TouchableOpacity style={styles.sidebarItem} onPress={handleProducts}>
            <Text style={styles.sidebarText}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
      <Text style={styles.btnText}>Pick an Image</Text> 
    </TouchableOpacity> 
    <View style={styles.imageContainer}>
     {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>} 
    <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
        <Text style={styles.btnText}>Upload Image</Text> 
    </TouchableOpacity> 
    </View>
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

export default FormPage;
