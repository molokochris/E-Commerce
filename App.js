import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "../E-Commerce/components/auth/Login";
import Registration from "./components/auth/Registration";
import Welcome from "./components/screens/Welcome";
import Home from "./components/screens/Home";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Welcome /> */}
      <Home />
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <List/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
