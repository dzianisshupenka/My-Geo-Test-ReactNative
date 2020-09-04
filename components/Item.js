import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import { HistoryDetails } from './HistoryDetails';

export const Item = ({itemData}) => {

const [visible, setVisible] = useState(false)

const closeModal = () => setVisible(false)

    if (itemData) {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => setVisible(true)}>
                <Modal animationType="slide" visible={visible} >
                    <HistoryDetails closeModal = {closeModal} data = {itemData} />
                </Modal>
                <View style={styles.mainItem}>
                    <Text style={styles.itemText2}>{`Дата: ${itemData.currentDate.date}`}</Text>
                    <Text style={styles.itemText2}>{`Широта: ${itemData.where.lat} Долгота: ${itemData.where.lng}`}</Text>
                    <Text style={styles.itemText2}>{`Город: ${itemData.address.city} Адрес: ${itemData.address.street}`}</Text>
                </View>
            </TouchableOpacity>

        )
    } else return (
        <Text style={styles.itemText2}>loooooo</Text>
    )

}

const styles = StyleSheet.create({
    mainItem: {
        backgroundColor: '#2C1B57',
        height: 80,
        width: 300,
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