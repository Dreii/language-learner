import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

import { ButtonStyles } from '../styles/styles'

const Login = ({ enabled, login, switchAuthMode }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <TextInput value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button style={ButtonStyles.button} onPress={login} title="Login" />
            <Button style={ButtonStyles.button} onPress={switchAuthMode} title="Have an account? Log in." />
        </View>
    )
}

export default Login
