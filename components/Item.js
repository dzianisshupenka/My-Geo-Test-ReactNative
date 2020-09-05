import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

export const Item = ({itemData, nav}) => {

    if (itemData) {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => nav.navigate('HistoryDetayls', {data: itemData})}>
                <View style={styles.mainItem}>
                    <Text style={styles.itemText2}>{`Дата: ${itemData.currentDate.date}`}</Text>
                    <Text style={styles.itemText2}>{`Широта: ${itemData.where.lat} Долгота: ${itemData.where.lng}`}</Text>
                    <Text style={styles.itemText2}>{`Город: ${itemData.address.city} Адрес: ${itemData.address.street}`}</Text>
                </View>
            </TouchableOpacity>
        )
    } else return (
        <Text style={styles.itemText2}>loading</Text>
    )
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    mainItem: {
        backgroundColor: '#0b0229',
        height: 80,
        width: width * 0.8,
        padding: 10,
        marginVertical: 3
    },
    positionText: {
        color: '#54B0FC',
        fontSize: 20
    },
    itemText2: {
        color: '#D2C0FF',
        fontSize: 12
    },
    touchable: {
        opacity: 1
    }
})