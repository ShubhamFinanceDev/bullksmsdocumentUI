import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// Services
import useActionDispatch from '@/hooks/useActionDispatch';
import { changeHandlerHelper } from '@/hooks/helper/changeHandler';
import pageRoutes from '@/utils/page.Routes';
import endpoint from '@/services/endpoint';
import axios from '@/services/axios';

const authIninitalBody = {
    emailId: "",
    password: "",
}

const singUpIninitalBody = {
    firstName:'',
    lastName: '',
    emailId: '',
    password: '',
    mobileNo: '',
    role: ''
    }

function useAuthHooks() {
    const router = useRouter();
    const { setError, setSuccess, setUserAuthCred, removeUserAuthCred } = useActionDispatch()
    const [authBody, setAuthBody] = useState({ ...authIninitalBody })
    const [singUpState, setsingUpState] = useState({ ...singUpIninitalBody })

// mobile validation

    const isMobileValid = (mobileNo) => {
        const regex = /^\d{10}$/;
        return regex.test(mobileNo);
    };

    
    const siginSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const body = {...authBody}
            const {data} = await axios.post(endpoint.signIn(),body)
            const { token, emailId: email,isAdmin} = data
            const user = { token, email,isAdmin }
            setUserAuthCred(user)
            Cookies.set("token", data.token)
            Cookies.set("user",JSON.stringify(user||{}))

            if (isAdmin) {
                router.push(pageRoutes.DASHBOARD_PAGE())
            } else {
                router.push(pageRoutes.DASHBOARD_PAGE())
            }
            router.push(pageRoutes.DASHBOARD_PAGE())
        } catch (error) {
            setError(error)
        }
    }

    const singUpSubmitHandler = async (e, onsuccess = () => {}) =>{
          e.preventDefault()
          try {
            const body = {...singUpState}
            if (!isMobileValid(singUpState.mobileNo)) {
                setError("Mobile number is not correct");
                return;
            }
            const {data} = await axios.post(endpoint.singUp(),body)
            setSuccess('user created successfully') 
            onsuccess()
            return``
          }catch (error){
            setError(error)
          }
    }

    const logoutActionHandler = () => {
        router.push(pageRoutes.SING_IN())
        Cookies.remove("user")
        Cookies.remove("token")
        removeUserAuthCred()
    }

    // change handler
    const siginChangeHandler = (e) => changeHandlerHelper(e, authBody, setAuthBody)
    const singUpChangeHandler = (e) => changeHandlerHelper(e, singUpState, setsingUpState)

    return ({
        authBody,singUpState, siginChangeHandler, siginSubmitHandler,singUpChangeHandler,
        logoutActionHandler,singUpSubmitHandler
    })
}

export default useAuthHooks