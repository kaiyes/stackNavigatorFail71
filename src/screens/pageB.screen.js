import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native'

export default function PageB() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.btnText}>This is Page B</Text>

      <TouchableOpacity onPress={() => console.log('s')}>
        <Text style={styles.btnText}>GO back to page B</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262e3b',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 30,
    color: 'black',
  },
})
