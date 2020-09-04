import React from 'react';
import dataService from '../dataService/dataService';
import {Text} from 'react-native';
import History from './History';

export default class HistoryWrapper extends React.Component {

    dataService = new dataService();
  
    state = {
        keys: null
    }

    getKeys() {
        this.dataService.getAllKeys()
        .then(data => {
            this.setState({
                keys: data
            })
        })
    }
  
    componentDidMount() {   
        this.getKeys()   
    }

    render() {
        if (this.state.keys) {
            return (
                <History  keys={this.state.keys}/>
            )
        } else return <Text>loaddddd</Text>

      }
  }