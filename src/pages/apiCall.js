import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';

import { useGetAllShipsQuery } from '../redux/apiSlice';

const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

const ApiCall = () => {

    const { data, error, isLoading } = useGetAllShipsQuery()

    if (isLoading) return <Text style={{ color: "black" }}>"Loading..."</Text>;
    if (error) return <Text>{error.message}</Text>;

    return (

        <View style={styles.container}>
            <Text style={styles.mainText}>Ships of SPACEX</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 35 }}>
                {data.map((value) =>
                    <View key={value.ship_id}>
                        <Text style={styles.valueText}>{value.ship_id}</Text>
                        <Image source={{ uri: value.image }} style={styles.image} />
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default ApiCall;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    mainText: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 22
    },
    valueText: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 9,
        color: "white"
    },
    image: {
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 5
    }
})