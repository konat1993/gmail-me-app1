import React from 'react'

import { auth, googleProvider } from "./firebase/firebase"

import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

import { Button } from '@material-ui/core'

import "./Login.scss"
export const Login = () => {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(googleProvider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="gmailImg" />
                <Button onClick={signIn} color="primary" variant="contained">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
