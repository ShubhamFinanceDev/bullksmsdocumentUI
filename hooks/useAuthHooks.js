import React, { useState } from 'react'
import { useRouter } from "next/navigation";
// Services
import useActionDispatch from '@/hooks/useActionDispatch';
import { changeHandlerHelper } from '@/hooks/helper/changeHandler';
import pageRoutes from '@/utils/page.Routes';
import endpoint from '@/services/endpoint';
import axios from 'axios';


const authIninitalBody = {
    emailId: "",
    password: "",
}

// const passwordResetInitialState = {
//     emailId: "",
//     otpCode: "",
//     newPassword: "",
//     confirmNewPassword: "",
//     // ...passwordResetTestState
// }

function useAuthHooks() {
    const router = useRouter();
    const { setError, setSuccess, setUserAuthCred, removeUserAuthCred } = useActionDispatch()
    const [authBody, setAuthBody] = useState({ ...authIninitalBody })

    
    const siginSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const body = {...authBody}
            const {data} = await axios.post(endpoint.signIn(),body)
            const { token, emailId: email,} = data
             const user = { token, email }
            setUserAuthCred(user)
            router.push(pageRoutes.DASHBOARD_PAGE())
            
        } catch (error) {
            setError(error)
            
        }
    }


    // change handler
    const siginChangeHandler = (e) => changeHandlerHelper(e, authBody, setAuthBody)


    return ({
        authBody, siginChangeHandler, siginSubmitHandler,

        // ActionHandler
        // logoutActionHandler

    })
}

export default useAuthHooks