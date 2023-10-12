import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './components/screens/Welcome'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import List from './components/screens/List'

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <Welcome/> */}
      {/* <Login/> */}
      <Registration/>
      {/* <List/> */}
    </View>
  )
}