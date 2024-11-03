import { Image, View, StyleSheet, Text, Platform } from "react-native"


export default LogoAndText = ({text}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.Logo} source={ require('../assets/reactnativeLogo.jpg') }/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 80 : 120,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Logo: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    text: {
        margin: 12,
        fontSize: 28,
        fontWeight: 'bold'
    }
})