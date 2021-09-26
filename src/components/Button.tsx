import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const Button = props => {
  const { title, onPress } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

// const colorSchemes = {
//     default: {
//         primary: {
//             color:
//         }
//     }
// }

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 230,
    height: 54,
    left: 64,
    top: 425,
  },
  text: {
    fontSize: 14,
    color: '#E5E5E5',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
})

export default Button
