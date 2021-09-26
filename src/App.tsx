/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
<<<<<<< HEAD
import MainStack from './screens/Navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>
  )
=======
import Landing from './screens/Landing'
import Dashboard from './screens/Wallet'
import Wallet from './screens/Wallet'

const App = () => {
  return <Wallet></Wallet>
  // return <Landing></Landing>
>>>>>>> 5afded0de5b9f94341aeae4a0c68a5523277f760
}

export default App
