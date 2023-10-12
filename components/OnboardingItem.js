import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function OnboardingItem(item) {
  const { width } = useWindowDimensions();
  return (
    <View style={[{ width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      {/* <View style={{ flex: 0.3 }}>
        <Text>{item.title}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
});
