import React from 'react';
import { View, Button, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ItemList } from './ItemList';



export default class History extends React.Component {

    state = {
        data: null
    }

    clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
        }
        this.setState({
            data: null
        })
      }

    getMultiple = async (keys) => {

        let values
        try {
          values = await AsyncStorage.multiGet(keys)
        } catch(e) {
        }
        this.setState({
            data: values
        })
      }
    
    componentDidMount() { 
        this.getMultiple(this.props.keys)
    }

    render() {
        if (this.state.data) {
            let data = this.state.data
            let itemData = data.map(item => JSON.parse(item[1])).sort((a, b) => {
                if (a.currentDate.date < b.currentDate.date) {
                  return 1;
                }
                if (a.currentDate.date > b.currentDate.date) {
                  return -1;
                }
                return 0;
              })

        return (
            <View style={styles.historyMain}>
                <Button
                    title="Clear history"
                    color="#413C63"
                    onPress={() => this.clearAll()}
                />
                <ScrollView >
                    <ItemList items = {itemData}/>
                </ScrollView>
            </View>
        )
        } else return (
            <View style={styles.historyMainNoData}>
                <Button
                    title="Clear history"
                    color="#413C63"
                    onPress={() => this.clearAll()}
                />
                <Text style={styles.historyText}>No data</Text>
            </View>
            
        )

      }
  }

const styles = StyleSheet.create({
    historyMain: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#0D011E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    historyMainNoData: {
        flex: 1,
        paddingTop: 10,
        height: '100%',
        backgroundColor: '#0D011E',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    historyText: {
        color: '#54B0FC',
        fontSize: 30
    },
    historyText2: {
        color: '#54B0FC',
        fontSize: 5
    }
})