import React from 'react';
import { StyleSheet, View } from 'react-native';
import apiService from '../dataService/apiService';
import dataService from '../dataService/dataService';
import { Position } from './Position';
import { Adress } from './Adress';
import { Weather } from './Weather';

export default class MainScreen extends React.Component {

  apiService = new apiService();
  dataService = new dataService();

  state = {
    currentDate:{
      date: null,
      time: null
    },
    addressReady: false,
    weatherReady: false,
    where: {
      lat: null, 
      lng: null
    },
    error: null,
    address: {
      country: null,
      city: null,
      street: null
    },
    weather: {
      description: null,
      temp: null,
      wind: null
    }
  }

  getAddress() {
    this.apiService.getAddress(this.state.where.lat, this.state.where.lng)
    .then(data => {
      this.setState({
                address: {
                  country: data.results[0].locations[0].adminArea1,
                  city: data.results[0].locations[0].adminArea5,
                  street: data.results[0].locations[0].street
                },
                addressReady: true
      })
    })
  }

  getWeather() {
    this.apiService.getWeather(this.state.where.lat, this.state.where.lng)
    .then(data => {
      this.setState({
        weather: {
          description: data.weather[0].description,
          temp: Math.round(data.main.temp),
          wind: Math.round(data.wind.speed)
          },
        weatherReady: true
      })
    })
  }

  componentDidMount() {
      let geoOptions = {
          enableHighAccuracy: true,
          timeOut: 20000,
          maximumAge: 60 * 60 * 24
      };
      this.setState({addressReady:false, weatherReady:false, error: null });
      navigator.geolocation.getCurrentPosition( this.geoSuccess, this.geoFailure, geoOptions);
      
  }

    geoSuccess = (position) => {
        this.setState({
            currentDate: {
              time: new Date().toLocaleTimeString(),
              date: new Date().toLocaleString(),
            },
            ready: true,
            where: {
              lat: position.coords.latitude,
              lng: position.coords.longitude 
            }
        });
        this.getAddress()
        this.getWeather()
    }

    geoFailure = (err) => {
        this.setState({error: err.message});
    }

    render() {
      if(this.state.addressReady && this.state.weatherReady) {
        this.dataService.storeData(this.state, this.state.currentDate.date)
      }
        return (
            <View style={styles.container}>
              <Position position={this.state.where} currentDate={this.state.currentDate}/>
              <Adress address={this.state.address}/>
              <Weather weather={this.state.weather}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120343'
    },
    big: {
    }
});