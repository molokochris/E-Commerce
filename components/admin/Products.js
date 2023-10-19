import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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

const ProductsPage = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('products').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = async (productId, updatedProduct) => {
    try {
      await firebase.firestore().collection('products').doc(productId).update(updatedProduct);

      setProducts(prevProducts =>
        prevProducts.map(product => (product.id === productId ? { ...product, ...updatedProduct } : product))
      );
    } catch (error) {
      console.log('Error updating product:', error);
    }
  };

  const handleDelete = async productId => {
    try {
      await firebase.firestore().collection('products').doc(productId).delete();

      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
     <View>
     <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 10, left: 10 }}
      >
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
     </View>
     

      <Text style={{ margin: 16, fontSize: 24, fontWeight: 'bold' , textAlign:"center"}}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={{ margin: 16 }}>
            <Card.Title title={item.productName} />
            <Card.Content>
              <Text>Weight: {item.weight}</Text>
              <Text>Price: R {item.price}</Text>
              <Text>Category: {item.category}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleEdit(item.id, { productName: 'Updated Name' })}>Edit</Button>
              <Button onPress={() => handleDelete(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

export default ProductsPage;