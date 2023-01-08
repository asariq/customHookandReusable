import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    Alert,
} from 'react-native';
import ReuseButton from '../reusableComponentandHooks/button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { userData1 } from '../redux/slice';
import useInput from '../reusableComponentandHooks/input';

const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [name, bindName, resetName] = useInput("")
    const [lastName, bindLastName, resetLastName] = useInput("")
    const [email, bindEmail, resetEmail] = useInput("")
    
    const handleSubmit = () => {
        if (name != "" && email != "" && lastName != "") {
            if (email.includes("@") && email.includes(".") && email == email.toLowerCase()) {
                navigation.navigate("DashBoard"),
                    dispatch(userData1({ "name": name, "email": email, "lastName": lastName }))
            }

            else {
                Alert.alert("wrong Email", "Use Valid Email")
            }
        }
        else {
            Alert.alert("NIRVANA", "Fill all section")
        }

        resetName()
        resetLastName()
        resetEmail()
    }

    return (
        <View style={styles.container}>

            <Text style={styles.mainText}>NIRVANA SpaceX</Text>
            <Text style={styles.mainText}>Please fill the form</Text>

            <Text style={styles.hText}>First Name</Text>
            <TextInput
                placeholder='Name'
                placeholderTextColor={"grey"}
                {...bindName}
                style={styles.input} />

            <Text style={styles.hText}>Last Name</Text>
            <TextInput
                placeholder='Last Name'
                placeholderTextColor={"grey"}
                {...bindLastName}
                style={styles.input} />

            <Text style={styles.hText}>Email</Text>
            <TextInput
                placeholder="xxxx@xxxx.com"
                autoCapitalize="none"
                placeholderTextColor={"grey"}
                {...bindEmail}
                style={styles.input} />

            <ReuseButton title="MOVE FORWARD" onPress={() => handleSubmit()} mTop={windowHeight * 0.1} />
        </View>

    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    mainText: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: windowHeight * 0.02
    },
    hText: {
        color: "black",
        marginTop: 10,
        fontSize: 17,
        width: "100%",
        textAlign: "left",
        marginLeft: windowWidth * 0.24,
        fontWeight: "bold"
    },
    input: {
        fontSize: 20,
        color: "black",
        height: windowHeight * 0.06,
        width: windowWidth * 0.8,
        backgroundColor: "white",
        marginTop: 5,
        borderRadius: 15,
        elevation: 10.5
    },
})