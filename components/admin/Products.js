import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXQpFF1n301P_jpAk8Gxh2hYr1VdDy-Xg",
    authDomain: "e-commerce-284f2.firebaseapp.com",
    projectId: "e-commerce-284f2",
    storageBucket: "e-commerce-284f2.appspot.com",
    messagingSenderId: "652686747106",
    appId: "1:652686747106:web:dbc2cb357c6722f5af85bb"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ProductsPage = () => {
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
    <View>
      <Text>Products:</Text>
      {products.map(product => (
        <View key={product.id}>
          <Text>Product Name: {product.productName}</Text>
          <Text>Weight: {product.weight}</Text>
          <Text>Price: {product.price}</Text>
          <Text>Category: {product.category}</Text>
          <TouchableOpacity onPress={() => handleEdit(product.id, { productName: 'Updated Name' })}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(product.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProductsPage;