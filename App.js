import Main from './screens/MainComponent'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
console.disableYellowBox = true; // this allows for warning messages to be disabled inn the cons0le

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
    )
}

