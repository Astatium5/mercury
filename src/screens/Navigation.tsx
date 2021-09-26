import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Register from './Register'
import Login from './Login'
import Landing from './Landing'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// const DashboardStack = () => {
//   return (
//     <Drawer.Navigator>
//       <Stack.Screen></Stack.Screen>
//     </Drawer.Navigator>
//   )
// }

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
