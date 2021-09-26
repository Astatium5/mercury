import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button title="Login" onPress={null} />
      <Button title="Register" onPress={null} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#7B2CBF',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 48,
    textAlign: 'center',
  },
  loginButton: {
    padding: 24,
  },
})

export default Landing
