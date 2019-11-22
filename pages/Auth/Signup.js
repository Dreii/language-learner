import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

import { inputStyles } from '../styles/styles'
const Signup = ({ enabled, signup, switchAuthMode }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    console.log(inputStyles)
    return (
        <View>
            <TextInput style={inputStyles.text} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextInput style={inputStyles.text} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button style={inputStyles.button} onPress={signup} title="Signup" />
            <Button style={inputStyles.button} onPress={switchAuthMode} title="No an account? Sign up." />
        </View>
    )
}

export default Signup
