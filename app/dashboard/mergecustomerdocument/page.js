"use client";
import React, { useState } from "react";
import PageHeading from "@/components/core/PageHeading";
import ValidationMsg from "@/components/core/Input/ValidationMsg";
import useFormHooks from "@/hooks/useFormHooks";
import { InputWithLabel } from "@/components/core/Input";
import { useSelector } from "react-redux";
import {SelectWithLabel} from "@/components/core/Input";

const Mergecustomerdocument = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { files } = useSelector((state) => state.filesSlice);
  const {listOfPdfNames,downloadCount}=files
  const { pdfUrl, fetchAllFilesChangeHandler, fetchAllFiles,categoryDocument,documentCatageryChangeHandler } = useFormHooks();

  return (
    <div className="main">
      <PageHeading
        heading="Merge Customer Document :"
        showSearchInput={false}
        bypassSecurity={true}
      />
      <div className="container">
        <div className="container mt-4 p-0">
          <form onSubmit={fetchAllFiles}>
            <div className="row align-items-end px-2">
              <ValidationMsg />
              <div className="col-md-6">
                <label>File Path :</label>
                <InputWithLabel
                  feilds={{
                    name: "pdfUrl",
                    type: "text",
                    isRequired: true,
                  }}
                  state={pdfUrl}
                  onChangeHandler={fetchAllFilesChangeHandler}
                />
              </div>
              <div className='col-md-4'>
        <SelectWithLabel
          feilds={{
            label: "Category",
            name: "category",
            type: "select",
            options: [
              { name: "ADHOC", value: "ADHOC" },
              { name: "SOA", value: "SOA" },
              { name: "INTEREST_CERTIFICATE", value: "INTEREST_CERTIFICATE" },           
              { name: "SOA_QUARTERLY", value: "SOA_QUARTERLY" },

            ],
            isRequired: true,
          }}
          state={categoryDocument}
          onChangeHandler={documentCatageryChangeHandler}
        />
      </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="table-responsive table-container mt-4">
          <h3 className="mb-2">Download Count : {downloadCount}</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Loan No</th>
                {/* <th>Download Count</th> */}
                <th>Upload Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {listOfPdfNames?.map((file, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{file.fileName}</td>
                  <td>{new Date(file.uploadTime).toLocaleDateString()}</td>
                    <td>{file.category}</td> 

                  {/* <td>
                  <a href={`${baseURL}${file.downloadUrl}`} target="_blank" rel="noopener noreferrer">
                      <button className="button Download_button">Download</button>
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mergecustomerdocument;
