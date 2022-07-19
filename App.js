import Main from './screens/MainComponent'
import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true; // this allows for warning messages to be disabled inn the cons0le

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
    )
}

