import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

import { inputStyles } from '../styles/styles'

const Login = ({ enabled, login, switchAuthMode }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <TextInput style={inputStyles.text} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextInput style={inputStyles.text} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button style={inputStyles.button} onPress={login} title="Login" />
            <Button style={inputStyles.button} onPress={switchAuthMode} title="Have an account? Log in." />
        </View>
    )
}

export default Login
