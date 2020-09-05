import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { Position } from './Position';
import { Adress } from './Adress';
import { Weather } from './Weather';

export const HistoryDetails = ({navigation, route}) => {
    const data = route.params.data;
    return(
        <View style={styles.container}>     
            <View style={styles.buttonView}>
                <Button title='Back' color="#413C63" onPress={()=>navigation.goBack()} />
            </View> 
            <Position position={data.where} currentDate={data.currentDate}/>
            <Adress address={data.address}/>
            <Weather weather={data.weather}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        width: 100,
        marginVertical: 25
    },
    container: {
        flex: 1,
        backgroundColor: '#0b0229',
        alignItems:'center'
    },
    big: {
    }
});