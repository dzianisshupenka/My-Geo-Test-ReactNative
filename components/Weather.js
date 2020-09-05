import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export const Weather = ({weather}) => {
    return(
        <View style={styles.mainWeather}>
            <Text style={styles.weatherText}>Weather</Text>
            <Text style={styles.weatherText2}>{`Температура: ${weather.temp}°C`}</Text>
            <Text style={styles.weatherText2}>{`Описание: ${weather.description}`}</Text>
            <Text style={styles.weatherText2}>{`Ветер: ${weather.wind} м/с`}</Text>
        </View>
    )
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    mainWeather: {
        flex: 1,
        backgroundColor: '#0D011E',
        padding: 20,
        width: width-30,
        marginVertical: 3,
        marginHorizontal: 15
    },
    weatherText: {
        color: '#54B0FC',
        fontSize: 20
    },
    weatherText2: {
        color: '#9FD2FE',
        fontSize: 16
    }
})