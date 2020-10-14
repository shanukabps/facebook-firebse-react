import React from 'react'
import './Login.css'
import { auth, provider } from "../../firebase"
import { actionTypes } from '../contexApi/reducer'
import { useStateValue } from '../contexApi/StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();




    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

            // console.log(result.user)



        }).catch((error) => alert(error.message))
    }


    return (
        <div className="logins"> <div className="bps">
            <h6 >BPS</h6></div>
            <div className="logoes">
                <img alt='' src="https://img.icons8.com/cute-clipart/128/000000/facebook-new.png" />

            </div>


            <button onClick={signIn} className="logbut" type="submit">SIGNIN</button>

        </div>
    )
}

export default Login
