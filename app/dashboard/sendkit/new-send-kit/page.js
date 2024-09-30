'use client'

import React from 'react'
import useFormHooks from '@/hooks/useFormHooks'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import { SelectWithLabel } from '@/components/core/Input'
import PageHeading from '@/components/core/PageHeading'
import { useSelector } from 'react-redux'
import useNavigateHook from '@/hooks/useNavigateHooks'
import Pagination from '@/components/core/Pagination'

const NewSendSmsPage = () => {
  const navigate=useNavigateHook()
  const {sendkit,SendkitChangeHandler,SendkithandleSubmit,pagination,fetchsendpendingkit}= useFormHooks()
  const { NewSmsSendDetails } = useSelector((state) => state.filesSlice);
  const{smsInformation}=NewSmsSendDetails


  return (

    <div className="main">
    <ValidationMsg/>
      <PageHeading
        heading="Latest Send Kit"
        // subHeading={dashboard?.name}
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "Back",
            className: "button",
            onClick:() => navigate('SEND_KIT_PAGE')
          },
        ]}
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
            ],
            isRequired: true,
          }}
          state={sendkit}
          onChangeHandler={SendkitChangeHandler}
        />
      </div>
        <div className="col-md-2" >
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
                <th>Sms Send Date</th>
              </tr>
            </thead>
            <tbody>
              {smsInformation?.map((sms, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sms.loanNumber}</td>
                  <td>{sms.mobileNumber}</td>
                  <td>{sms.smsFlag}</td>
                  <td>{new Date(sms.timestamp).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination meta={pagination.meta} next={fetchsendpendingkit}/>
    </div>
  )
}

export default NewSendSmsPage
