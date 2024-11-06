import { View , Text, StyleSheet, StatusBar} from "react-native"

export default ProductDetail = () => {
    return (    
        <View style={styles.container}>
            <StatusBar backgroundColor={'#999'}/>
            <Text>Favourites screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});