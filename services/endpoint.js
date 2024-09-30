const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const endpoint = {
    signIn: () => BASE_URL + `/sms-service/login`,
    csv_upload: () => BASE_URL + `/admin/csvUpload`,
    singUp: () => BASE_URL + `/admin/register`,
    fileupload: (pdfUrl = "") => BASE_URL + `/admin/fetch-pdf?pdfUrl=${pdfUrl}`,
    sendkit: (smsCategory = "", type="" ,pageNo=1) => BASE_URL + `/admin/sms-process?smsCategory=${smsCategory}&type=${type}&pageNo=${pageNo}`,
    dashboard: (pageNo=1) => BASE_URL + `/sms-service/dashboard-view?pageNo=${pageNo}`,
}

export default endpoint;   
