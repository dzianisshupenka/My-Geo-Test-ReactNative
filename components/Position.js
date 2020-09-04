import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Position = ({position, currentDate}) => {
    return(
        <View style={styles.mainPosition}>
            <Text style={styles.positionText}>Position</Text>
            <Text style={styles.positionText2}>{`Широта: ${position.lat}`}</Text>
            <Text style={styles.positionText2}>{`Долгота: ${position.lng}`}</Text>
            <Text style={styles.positionText2}>{`Дата: ${currentDate.date}`}</Text>
            <Text style={styles.positionText2}>{`Время: ${currentDate.time}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainPosition: {
        flex: 1,
        backgroundColor: '#0D011E',
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 15
    },
    positionText: {
        color: '#54B0FC',
        fontSize: 20
    },
    positionText2: {
        color: '#9FD2FE',
        fontSize: 16
    }
})