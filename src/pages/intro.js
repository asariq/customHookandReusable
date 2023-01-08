import React, { useEffect } from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReuseButton from '../reusableComponentandHooks/button';
import { useSelector } from 'react-redux';
const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

const DashBoard = () => {
    const navigation = useNavigation();
    const data = useSelector((state) => state.counter)

    useEffect(() => {
        Alert.alert("Nirvana", `Welcome ${data.userData.name} ${data.userData.lastName} to nirvan having ${data.userData.email} as email.`)
    }, [])

    return (
        <ImageBackground source={require("../images/background.jpg")} style={styles.imgbackground}>

            <View style={styles.container}>
                <Text style={styles.mainText}>WELCOME TO WORLD OF</Text>
                <Text style={[styles.mainText, { fontSize: 30 }]}>NIRVANA</Text>
                <ReuseButton title="FIREBASE DATABASE" onPress={() => navigation.navigate("Notification")} mTop={windowHeight * 0.5} />
                <ReuseButton title="DYNAMIC API" onPress={() => navigation.navigate("ApiCall")} mTop={windowHeight * 0.009} />
            </View>

        </ImageBackground>

    )
}

export default DashBoard;
const styles = StyleSheet.create({
    imgbackground: {
        height: windowHeight * 1,
        width: windowWidth * 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 22
    },

})