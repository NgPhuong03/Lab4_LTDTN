import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, Alert } from "react-native"
import LogoAndText from "../components/LogoAndText"
import { TextInput } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from '../AuthContext';


export default SignIn = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignUpPress = () => {
        navigation.navigate('SignUp');
    }

    const {LogIn} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <LogoAndText text={'Welcome'}/>

            <View style={styles.ContentContainer}>

                {/* Input email */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="envelope" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'/>
                </View>

                {/* Input Password */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="lock" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        placeholder='Password'/>
                </View>

                <View style={styles.forgotpwContainer}>
                    <Text style={styles.forgotpwText}>Forgot password?</Text>
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => LogIn(email,password)}>
                    <Text style={styles.loginText}>LOG IN</Text>
                </TouchableOpacity>

                
                <Text style={{marginBottom: 12, fontSize: 24, fontWeight:'bold'}}>Or login with</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                        style={{ borderRadius: 100, width: 70, height: 70, margin: 12}}
                        source={require('../assets/fb.png')}/>
                        <Image 
                        style={{ borderRadius: 100, width: 70, height: 70, margin: 12}}
                        source={require('../assets/gg.png')}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18}}>Don't have an account?</Text>
                    <Text style={{fontSize: 18, color: 'blue'}} onPress={SignUpPress}> Sign up here!</Text>
                </View>
            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    ContentContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputContainer:{
        flexDirection: 'row',
        margin: 8
    },
    Input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: 52,
        paddingLeft: 60,
        fontSize: 16
    },
    IconInput:{
        position: 'absolute',
        top: '25%',
        right: '70%'
    },
    forgotpwContainer:{
        width: '80%',
        alignItems: 'flex-end'
    },
    forgotpwText: {
        color: '#FF6666'
    },
    loginBtn: {
        margin: 20,
        width: '80%',
        height: 52,
        backgroundColor: '#FF9933',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    loginText: {
        color: 'white',
        fontSize: 28
    }
})

