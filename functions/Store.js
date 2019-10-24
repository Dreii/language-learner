import {AsyncStorage} from 'react-native';
import Sargeant from './Sargeant'

export default class Store {
    // Save data to local storage, get back true if successfull or false if failed
    async save (key, value) {
        try {
            await AsyncStorage.setItem(key, value)
            return true
        } catch (error) {
            Sargeant.report(error)
            return false
        }
    }

    // Get data at a certain key in the local storage or get null if not exists
    async get (key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value !== null ? value : null
        } catch (error) {
            Sargeant.report(error)
            return null
        }
    }
}
