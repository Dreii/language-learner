import React, {useState} from 'react'
import { View } from 'react-native'

import Login from './Login'
import Signup from './Signup'

const Auth = ({ auth }) => {
    const [loginOrSignup, setLoginOrSignup] = useState('login')
    return (
        <View>
            <Login
                enabled={loginOrSignup === 'login'}
                login={()=>console.log('login')}
                switchAuthMode={()=>setLoginOrSignup('signup')}
            />
            <Signup
                enabled={loginOrSignup === 'signup'}
                signup={()=>console.log('signup')}
                switchAuthMode={()=>setLoginOrSignup('login')}
            />
        </View>
    )
}

export default Auth
