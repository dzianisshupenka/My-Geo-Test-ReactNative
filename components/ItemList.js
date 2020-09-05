import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Item } from './Item';

export const ItemList = ({items, nav}) => {
    if (items) {
        let itemsList = items.map(item => <Item nav = {nav} key = {item.currentDate.time} itemData={item}/>)
        return(
            <View style={styles.mainPosition}>
                {itemsList}
            </View>
        )
    } else return (
        <Text style={styles.positionText}>LOADING</Text>
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