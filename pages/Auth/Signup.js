import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

import { ButtonStyles } from '../styles/styles'
console.log(ButtonStyles)
const Signup = ({ enabled, signup, switchAuthMode }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <TextInput value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button style={ButtonStyles.button} onPress={signup} title="Signup" />
            <Button style={ButtonStyles.button} onPress={switchAuthMode} title="No an account? Sign up." />
        </View>
    )
}

export default Signup
