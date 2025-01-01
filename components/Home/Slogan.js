import { View , Text, StyleSheet} from "react-native"

export default function Slogan () {
    return (
        <View style={styles.container}>
            <Text style={styles.slogan}>PHONG CÁCH THỜI THƯỢNG</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5DEB3'
    },
    slogan: {
        fontSize: 30,
        color: '#FF3030', 
        fontStyle: 'italic'
    }
});