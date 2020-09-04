import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { Position } from './Position';
import { Adress } from './Adress';
import { Weather } from './Weather';

export const HistoryDetails = ({data, closeModal}) => {
    return(
        <View style={styles.container}>
            <Button                     
                title="close"
                color="#413C63"
                onPress={() => closeModal()}
            />
            <Position position={data.where} currentDate={data.currentDate}/>
            <Adress address={data.address}/>
            <Weather weather={data.weather}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f0770'
    },
    big: {
    }
});