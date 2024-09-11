const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const endpoint = {
    signIn: () => BASE_URL + `/sms-service/login`

}

export default endpoint;   
