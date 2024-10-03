"use client"
import { useRef, useState } from "react";
import axios from "@/services/axios";
import endpoint from "@/services/endpoint";
import useActionDispatch from "@/hooks/useActionDispatch";
import { changeHandlerHelper } from '@/hooks/helper/changeHandler';


// const MergecustomerdocumentState = {
//   smsCategory:''
// }
const useFormHooks = () => {
  const fileInputRef = useRef(null);
  const { setError, setSuccess, setFiles, setSmskit, setNewSmsSendDetails, setDeshboardData } = useActionDispatch();
  const [uploadFile, setUploadFile] = useState({ file: null, error: "" });
  const [parsedData, setParsedData] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [sendkit, setSendkit] = useState({ smsCategory: "", type: "new" });
  const [categoryDocument, setcategoryDocument] = useState({  category:""});
  const [validationError, setValidationError] = useState(false);
  const [pagination,setPagination] = useState({totalCount:0})

  const uploadFileChangeHandler = (e) => {
    const { files } = e.target;
    if (files?.[0]?.type !== "text/csv") {
      setUploadFile({
        file: null,
        error: "Wrong file format, please upload a CSV file.",
      });
    } else {
      setUploadFile({ file: files[0], error: "" });
      parseCsvFile(files[0]);
    }
  };

  const parseCsvFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split("\n").filter(Boolean);
      const data = rows.map((row) => {
        const values = row.split("|");
        return {
          loanNo: values[0]?.trim(),
          phoneNo: values[1]?.trim(),
          categoryCode: values[2]?.trim(),
        };
      });

      setParsedData(data);
    };

    reader.readAsText(file);
  };

  const resetFormState = () => {
    setUploadFile({ file: null, error: "" });
    setParsedData([]);
    setValidationError(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const submitCsvData = async (e) => {
    e.preventDefault();
    if (!uploadFile.file) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    const formData = new FormData();
    formData.append("file", uploadFile.file);
    try {
      const response = await axios.post(endpoint.csv_upload(),formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(response.data.msg);
      resetFormState();
    } catch (error) {
      setError("Error uploading binary CSV data:", error);
    }
  };

  const fetchAllFiles = async (e = { preventDefault : () => {}}) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(endpoint.fileupload(pdfUrl.pdfUrl, categoryDocument.category));
      setFiles(data)
      setSuccess(data.commonResponse.msg);
      setPdfUrl({ pdfUrl: "" });
      setcategoryDocument({category:""})
    } catch (error) {
      setError(error);
    }
  };

  const fetchsendkit = async (pageNo = 1, smsCategory='', type = 'previous') => {
    try {
      const { data } = await axios.get(endpoint.sendkit(smsCategory,type,pageNo || 1));
      setSmskit(data)
      setPagination({
        data:[],
        meta : {
          nextPage : data.nextPage,
          currentPage : pageNo,
          totalPageCount: Math.ceil(data.totalCount / 100),
          totalCount : data.totalCount

},
    })
    } catch (error) {
      setError(error);
    }
  };
  const fetchsendpendingkit = async (pageNo = 1,type = 'unprocessed',smsCategory = "",) => {
    try {
      const { data } = await axios.get(endpoint.sendkit(smsCategory,type,pageNo));
      setNewSmsSendDetails(data)
      setPagination({
        data:[],
        meta : {
          nextPage : data.nextPage,
          currentPage : pageNo,
          totalPageCount: Math.ceil(data.totalCount / 100),
          totalCount : data.totalCount
        },
      error: data.msg,
    })

    } catch (error) {
      setNewSmsSendDetails([])
      setError(error);
    }
  };

  const handlePageChange = (newPage) => {
    fetchsendpendingkit(newPage, 'unprocessed', sendkit.smsCategory);
  };



  const SendkithandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(endpoint.sendkit(sendkit.smsCategory, sendkit.type));
    setNewSmsSendDetails(data)
      setSuccess(data.msg)
    } catch (error) {
      setError(error)
    }
  };

  const fetchDashboardData = async (pageNo = 1) => {
    try {
      const { data } = await axios.get(endpoint.dashboard(pageNo));
      setDeshboardData(data)
      setPagination({
        data:[],
        meta : {
          nextPage : data.nextPage,
          currentPage : pageNo,
          totalPageCount: Math.ceil(data.totalCount / 100),
          totalCount : data.totalCount
},
      error: data.msg
    })

      setSuccess(data.msg);
    } catch (error) {
      setError(error);
    }
  };


  // change handler
  const fetchAllFilesChangeHandler = (e) => changeHandlerHelper(e, pdfUrl, setPdfUrl)
  const SendkitChangeHandler = async (e) => {changeHandlerHelper(e, sendkit, setSendkit);
    const { name, value } = e.target;
    if (name === 'smsCategory') {
      await fetchsendpendingkit(1,'unprocessed', value);
    }
  }
  const documentCatageryChangeHandler = (e) => changeHandlerHelper(e, categoryDocument, setcategoryDocument)

  return {
    uploadFile,
    fileInputRef,
    uploadFileChangeHandler,
    submitCsvData,
    resetFormState,
    parsedData,
    validationError,
    fetchAllFiles,
    pdfUrl,
    fetchAllFilesChangeHandler,
    fetchsendkit,
    fetchsendpendingkit,
    sendkit,
    pagination,
    categoryDocument,
    documentCatageryChangeHandler,
    SendkitChangeHandler,
    SendkithandleSubmit,
    fetchsendkit,
    fetchDashboardData,
    handlePageChange
  };
};

export default useFormHooks;