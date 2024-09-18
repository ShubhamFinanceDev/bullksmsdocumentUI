import { useRouter } from 'next/navigation'
import pageRoutes from '@/utils/page.Routes'

const useNavigateHook = () => {
    const router = useRouter()

    const navigate = (key = "", ...arg) => {
        if (key != "" && pageRoutes[key]) {
            let path = pageRoutes[key]
            router.push(path(...arg))
        }
    }

    return navigate
}

export default useNavigateHook