import React from 'react'
import { Image, ScrollView, ScrollViewBase, Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { HStack, Stack, Center, NativeBaseProvider } from "native-base"

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const Wallet = () => {
  return <SafeAreaView>
    <Text style={styles.title}>
      Your Wallet
    </Text>

    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between',
    }}>
      <View style={{flexDirection:'row', alignItems: 'center'}}> 
        <Text style={styles.line}>Bitcoin</Text>
        <Image style={{backgroundColor: "red", width: 50, height: 50}} source={logo} />
      </View>
      <Image style={{flex:2}} source={logo} />
      <Image source={logo} />
      <Text>Lol</Text>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 24,
    backgroundColor: '#7B2CBF',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 48,
    textAlign: 'center',
  },
  loginButton: {
    padding: 24,
  },
  line: {
    fontFamily: 'Arial',
    fontSize: 24,
    textAlign: 'center',
  },
})

export default Wallet
