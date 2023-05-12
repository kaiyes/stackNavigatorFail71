import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator'
import { name as appName } from './app.json'

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

AppRegistry.registerComponent(appName, () => App)
