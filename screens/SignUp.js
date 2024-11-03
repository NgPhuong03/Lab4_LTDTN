import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import LogoAndText from "../components/LogoAndText"
import { TextInput } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome'


export default SignIn = ({navigation}) => {
    const [username,setusername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPW,setconfirmPW] = useState('');

    const LoginPress = () => {
        navigation.pop();
    }

    return (
        <SafeAreaView style={styles.container}>
            <LogoAndText text={'Create New Account'}/>

            <View style={styles.ContentContainer}>

                {/* Input username */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="user" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={username}
                        onChangeText={setusername}
                        placeholder='Enter username'/>
                </View>

                {/* Input email */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="envelope" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter email'/>
                </View>

                {/* Input Password */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="lock" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Enter password'/>
                </View>

                {/* Input confirmPW */}
                <View style={styles.InputContainer}>
                    <Icon style={styles.IconInput} name="lock" size={28} />
                    <TextInput
                        style={styles.Input}
                        value={confirmPW}
                        onChangeText={setconfirmPW}
                        placeholder='Confirm password'/>
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>CREATE</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18}}>Already have an account?</Text>
                    <Text style={{fontSize: 18, color: 'blue'}} onPress={LoginPress}> Login now!</Text>
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
        margin: 24,
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

