import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, MyProvider } from './AuthContext';
import { useContext } from 'react';
import AuthNavigator from './components/AuthNavigator';
import BottomNavigation from './components/BottomNavigation';

const RootStack = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomNavigation/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <MyProvider>
      <RootStack/>
    </MyProvider>
  );
}
