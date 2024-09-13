import { useRef, useState } from "react";
import axios from "@/services/axios";
import endpoint from "@/services/endpoint";
import useActionDispatch from "./useActionDispatch";

const useFormHooks = () => {
  const fileInputRef = useRef(null);
  const { setError, setSuccess, setUserAuthCred, removeUserAuthCred } = useActionDispatch();
  const [uploadFile, setUploadFile] = useState({ file: null, error: "" });
  const [parsedData, setParsedData] = useState([]);
  const [validationError, setValidationError] = useState(false);

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
      const response = await axios.post(endpoint.csv_upload(), formData, {
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

  return {
    uploadFile,
    fileInputRef,
    uploadFileChangeHandler,
    submitCsvData,
    resetFormState,
    parsedData,
    validationError,
  };
};

export default useFormHooks;
