import {SafeAreaView, Text} from 'react-native';
import {Header} from './src/components/Header';
import {useGeoLocation} from './src/hooks/useGeoLocation';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  const {location} = useGeoLocation();
  console.log('location?.at()', location);
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header city={location.name} />
        <Text>Try editing me! 🎉</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
