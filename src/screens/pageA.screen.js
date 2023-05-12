import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native'

export default function PageA() {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}>This is page A</Text>

      <TouchableOpacity onPress={() => console.log('s')}>
        <Text style={styles.btnText}>GO</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262e3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 30,
    color: 'black',
  },
})
