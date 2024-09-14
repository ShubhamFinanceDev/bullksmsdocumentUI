"use client";
import React, { useState } from "react";
import PageHeading from "@/components/core/PageHeading";
import ValidationMsg from "@/components/core/Input/ValidationMsg";
import useFormHooks from "@/hooks/useFormHooks";
import { InputWithLabel } from "@/components/core/Input";

const Mergecustomerdocument = () => {
  const {pdfUrl, fetchAllFilesChangeHandler, handleSubmit } = useFormHooks();

  return (
    <div className="main">
      <PageHeading
        heading="Merge Customer Document"
        showSearchInput={false}
        bypassSecurity={true}
      />
      <div className="container">
        <div className="container mt-4 p-0">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-end px-2">
              <ValidationMsg />
              <div className="col-md-10">
                <label>Upload File :</label>
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
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mergecustomerdocument;
