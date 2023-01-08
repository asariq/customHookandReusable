import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';


const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

const ReuseButton = ({title,onPress,mTop}) => {
    
    return (
            <TouchableOpacity
             onPress={onPress}
             style={[styles.touch1,{marginTop:mTop}]}>
             <Text style={styles.touchText}>{title}</Text>
           </TouchableOpacity>
    )
}

export default ReuseButton;

const styles = StyleSheet.create({
    touch1: {
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight * 0.06,
        width: windowWidth * 0.7,
        backgroundColor: "black",
        borderRadius: 10
    },
    touchText: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 22
    },
})