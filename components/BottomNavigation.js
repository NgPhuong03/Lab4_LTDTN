import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View ,Text, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';
import Favourites from '../screens/Favourites';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainBottom = createBottomTabNavigator();
export default BottomNavigation = () => {
  return (
    <MainBottom.Navigator screenOptions={{headerShown: true, tabBarLabelStyle: {fontSize:12}}} >
      <MainBottom.Screen name='Home' component={Home} 
        options={{tabBarIcon: ({size,color}) => <Icon name="home" size={size} color={color}/>}}/>
      <MainBottom.Screen name='Categories' component={Categories} 
        options={{tabBarIcon: ({size,color}) => <Icon name="th-large" size={size} color={color}/>}}/>
      <MainBottom.Screen name='Favourites' component={Favourites} 
        options={{tabBarIcon: ({size,color}) => 
            (
                <View>
                  <Icon name="heart" size={size} color={color}/>  
                  <View style={styles.soluong}>
                    <Icon name='circle' size={16} color={'red'}/>
                    <Text style={styles.soluongText}>3</Text>
                  </View>
                </View>
            )
        }}/>
      <MainBottom.Screen name='Profile' component={Profile} 
        options={{tabBarIcon: ({color}) => <Icon name="user" size={24} color={color}/>}}/>
    </MainBottom.Navigator>
  )
}
const styles = StyleSheet.create({
    soluong:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: -5,
        left: 15
    },
    soluongText:{
        position: 'absolute',
        color: '#fff',
        fontSize: 13
    }
})