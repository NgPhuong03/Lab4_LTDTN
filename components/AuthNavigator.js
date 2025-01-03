import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

export default function AuthScreen () {
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
            <AuthStack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        </AuthStack.Navigator>
    )
}