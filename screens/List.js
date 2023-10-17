import React from "react";
import { Button, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";


export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={{marginLeft:10,marginRight:10}}>
      <Text
        style={{
          fontSize: 30,
          marginTop: 500,
          color: "white",
          fontWeight: "bold",
        }}
      >
        ECommerce
      </Text>
      <Text style={{ color: "white", fontSize: 15, marginBottom: 20 }}>
        Buy easily on our online platform
      </Text>
      <TouchableOpacity>
      <View
        style={{
          backgroundColor: "white",
          height: 30,
          color:'blue',
          justifyContent: "center",
          alignItems: "center",
          borderWidth:1,
          borderColor:'white',
          borderRadius:16,
          

        }}
      >
        
          <Text  style={{ color:'blue',}}>Login</Text>
       
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "transparent",
          height: 30,
          color:'blue',
          borderWidth:1,
          borderColor:'white',
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius:16
        }}
      >
        
          <Text style={{ color:'white',}}>Register</Text>
       
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "blue",
    
    //justifyContent: "center",
    //marginBottom:50
  },
});
