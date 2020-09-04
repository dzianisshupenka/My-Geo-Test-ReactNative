import AsyncStorage from '@react-native-community/async-storage';

export default class dataService {
    async storeData (data, key) {
        const jsonValue = JSON.stringify(data)
        return await AsyncStorage.setItem(key, jsonValue)
    }

    async getAllKeys () {
        return await AsyncStorage.getAllKeys()
    }    
    
    async getMultiple(keys) {   
        
        await AsyncStorage.multiGet(keys)

    }
  
}

