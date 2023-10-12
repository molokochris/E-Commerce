import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "../E-Commerce/components/auth/Login";

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Welcome/> */}
      {/* <Login/> */}
      <Registration/>
      {/* <List/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
