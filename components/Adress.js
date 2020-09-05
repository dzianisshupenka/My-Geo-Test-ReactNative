import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export const Adress = ({address}) => {
    return(
        <View style={styles.mainAdress}>
            <Text style={styles.adressText}>Adress</Text>
            <Text style={styles.adressText2}>{`Страна: ${address.country}`}</Text>
            <Text style={styles.adressText2}>{`Город: ${address.city}`}</Text>
            <Text style={styles.adressText2}>{`Адрес: ${address.street}`}</Text>
        </View>
    )
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    mainAdress: {
        flex: 1,
        backgroundColor: '#0D011E',
        width: width-30,
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 15
    },
    adressText: {
        color: '#54B0FC',
        fontSize: 20
    },
    adressText2: {
        color: '#9FD2FE',
        fontSize: 16
    }
})