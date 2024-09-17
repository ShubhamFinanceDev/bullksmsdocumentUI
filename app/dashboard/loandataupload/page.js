"use client";
import React, { useState } from "react";
import PageHeading from "@/components/core/PageHeading";
import useFormHooks from "@/hooks/useFormHooks";
import ValidationMsg from "@/components/core/Input/ValidationMsg";

const Loandataupload = () => {
  const {
    fileInputRef,
    uploadFileChangeHandler,
    submitCsvData,
    resetFormState,
    parsedData,
    uploadFile,
    validationError,
  } = useFormHooks();

  return (
    <div className="main">
      <PageHeading
        heading="Loan Data Upload"
        showSearchInput={false}
        bypassSecurity={true}
      />
      <div className="container">
        <div className="container mt-4 p-0">
          <form>
            <div className="row align-items-end px-2">
              <ValidationMsg />
              <div className="col-md-10">
                <label>Upload Loan Data File :</label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  ref={fileInputRef}
                  accept=".csv"
                  required
                  onChange={uploadFileChangeHandler}
                />
                {uploadFile.error && (
                  <div className="text-danger mt-2">{uploadFile.error}</div>
                )}
              </div>
              {parsedData && parsedData.length > 0 && (
                <div className="col-md-2">
                  <button className="btn btn-primary" onClick={submitCsvData}>
                    Upload
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>

        {parsedData && parsedData.length > 0 && (
          <div className="table-responsive table-container mt-4">
            <h3 className="mb-2">Uploaded Loan Data Preview:</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Loan no</th>
                  <th>Phone no</th>
                  <th>Category code</th>
                </tr>
              </thead>
              <tbody>
                {parsedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowIndex +1}</td>
                    <td>{row.loanNo}</td>
                    <td>{row.phoneNo}</td>
                    <td>{row.categoryCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end mt-3">
             <button className="btn btn-outline-dark" onClick={resetFormState}>Cancel</button>
            </div>
          </div>
        )}
        {validationError && (
          <div className="text-danger mt-2">
            Please make sure all fields are filled before submission.
          </div>
        )}
      </div>
    </div>
  );
};

export default Loandataupload;
