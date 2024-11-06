import { View , Text, StyleSheet, StatusBar} from "react-native"

export default Favourites = () => {
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