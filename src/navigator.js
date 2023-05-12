import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import pageA from './screens/pageA.screen.js'
import pageB from './screens/pageB.screen.js'

//const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

function TestStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageA" component={pageA} />
      <Stack.Screen name="PageB" component={pageB} />
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return <TestStack />
}
