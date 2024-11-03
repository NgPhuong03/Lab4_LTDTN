import { View , Text, StyleSheet} from "react-native"

export default Categories = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#999'}/>
            <Text>Categories screen</Text>
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