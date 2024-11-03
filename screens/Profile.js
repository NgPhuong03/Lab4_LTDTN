import { useContext } from "react";
import { View , Text, StyleSheet, Button} from "react-native"
import { AuthContext } from "../AuthContext";

export default Profile = () => {
    const {LogOut} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
            <Button
                title="Log out"
                onPress={LogOut}/>
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