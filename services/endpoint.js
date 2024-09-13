const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const endpoint = {
    signIn: () => BASE_URL + `/sms-service/login`,
    csv_upload: () => BASE_URL + `/admin/csvUpload`,
    singUp: () => BASE_URL + `/admin/register`,



}

export default endpoint;   
