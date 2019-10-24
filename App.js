import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {StatusBarHeight} from './functions/GetDeviceHeaderHeight'

import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'

export default function App() {
    const [auth, setAuth] = useState(null)

    return (
        <View style={styles.container}>
            {auth === null ? <Auth auth={auth} /> : <Home auth={auth} />}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBarHeight
  },
})
