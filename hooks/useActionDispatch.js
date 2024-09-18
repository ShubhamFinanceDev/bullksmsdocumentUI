import { useDispatch } from 'react-redux'
import { setUserAuthCred,removeUserAuthCred } from '@/redux/slice/auth.slice'

import { setError, setSuccess, resetValidation } from '@/redux/slice/validation.slice'
import {setFiles,setSmskit,setNewSmsSendDetails} from '@/redux/slice/files.slice'
import {setDeshboardData} from '@/redux/slice/dashboard.slice'

const useActionDispatch = () => {
    const dispatch = useDispatch()

    return ({
        setError: (e) => {
            if (e?.response?.data?.msg) {
                dispatch(setError(e.response.data.msg))
            } else if (e?.message) {
                dispatch(setError(e.message))
            } else {
                dispatch(setError(e))
            }
        },
        setSuccess: (e) => dispatch(setSuccess(e)),
        resetValidation: (e) => dispatch(resetValidation(e)),
        setUserAuthCred:  (e) => dispatch(setUserAuthCred(e)),
        removeUserAuthCred:  (e) => dispatch(removeUserAuthCred(e)),
        setFiles:  (e) => dispatch(setFiles(e)),
        setSmskit:  (e) => dispatch(setSmskit(e)),
        setNewSmsSendDetails:  (e) => dispatch(setNewSmsSendDetails(e)),
        setDeshboardData:  (e) => dispatch(setDeshboardData(e))


    })
}

export default useActionDispatch