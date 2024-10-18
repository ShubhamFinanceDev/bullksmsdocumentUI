'use client'

import React, { useState } from 'react'
import useFormHooks from '@/hooks/useFormHooks'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import { SelectWithLabel } from '@/components/core/Input'
import PageHeading from '@/components/core/PageHeading'
import { useSelector } from 'react-redux'
import useNavigateHook from '@/hooks/useNavigateHooks'
import { useEffect } from 'react'
import useActionDispatch from '@/hooks/useActionDispatch'

const NewSendSmsPage = () => {
  const navigate = useNavigateHook()
  const {setNewSmsSendDetails} = useActionDispatch();
  const { sendkit, SendkitChangeHandler, SendkithandleSubmit } = useFormHooks()
  const [currentPage, setCurrentPage] = useState(1)
  const { NewSmsSendDetails } = useSelector((state) => state.filesSlice)
  const { smsInformation } = NewSmsSendDetails
  const itemsPerPage = 1000
  const totalPages = Math.ceil(smsInformation?.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = smsInformation?.slice(startIndex, startIndex + itemsPerPage)

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }
  useEffect(() => {
    setNewSmsSendDetails([])
}, [])


  return (
    <div className="main">
      <ValidationMsg />
      <PageHeading
        heading="Latest Send Kit"
        showSearchInput={false}
        bypassSecurity={true}
        btns={[{
          label: "Back",
          className: "button",
          onClick: () => navigate('SEND_KIT_PAGE')
        }]}
      />

      <form onSubmit={SendkithandleSubmit}>
        <div className='row'>
          <div className='col-md-8'>
            <SelectWithLabel
              feilds={{
                label: "Category",
                name: "smsCategory",
                type: "select",
                options: [
                  { name: "ADHOC", value: "ADHOC" },
                  { name: "SOA", value: "SOA" },
                  { name: "INTEREST_CERTIFICATE", value: "INTEREST_CERTIFICATE" },
                  { name: "SOA_QUARTERLY", value: "SOA_QUARTERLY" },

                ],
                isRequired: true,
              }}
              state={sendkit}
              onChangeHandler={SendkitChangeHandler}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-primary btn-sm mt-5">
              Send Sms
            </button>
          </div>
        </div>
      </form>

      <div className="table-responsive table-container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Loan Number</th>
              <th>Mobile Number</th>
              <th>Sms Status</th>
              <th>Category</th>
              <th>Sms Send Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((sms, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>
                <td>{sms.loanNumber}</td>
                <td>{sms.mobileNumber}</td>
                <td>{sms.smsFlag}</td>
                <td>{sms.category}</td>
                <td>{new Date(sms.timestamp).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination button"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='mt-3'>{currentPage}/{totalPages}</span>
        <button
          className="pagination button"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default NewSendSmsPage
