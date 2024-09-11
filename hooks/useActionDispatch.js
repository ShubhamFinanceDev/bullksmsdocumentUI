import { useDispatch } from 'react-redux'
import { setUserAuthCred } from '@/redux/slice/auth.slice'

import { setError, setSuccess, resetValidation } from '@/redux/slice/validation.slice'

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
        setUserAuthCred:  (e) => dispatch(setUserAuthCred(e))
    })
}

export default useActionDispatch