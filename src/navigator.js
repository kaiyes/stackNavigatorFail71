import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PageA from './screens/pageA.screen.js'
import PageB from './screens/pageB.screen.js'

//const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

function TestStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageA" component={PageA} />
      <Stack.Screen name="PageB" component={PageB} />
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return <PageA />
}
