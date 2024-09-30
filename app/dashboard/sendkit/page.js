'use client'

import React, {useEffect} from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import useFormHooks from '@/hooks/useFormHooks'
import { useSelector } from 'react-redux'
import useNavigateHook from '@/hooks/useNavigateHooks'
import Pagination from '@/components/core/Pagination'
import page from '../page'

const Sendkit = () => {
   const navigate=useNavigateHook()
  const { Smskit } = useSelector((state) => state.filesSlice);
  const{smsInformation}=Smskit

    const {fetchsendkit,pagination}=useFormHooks()

  useEffect(() => {
        fetchsendkit()
    }, [])

  return (
    <div className="main">
    <ValidationMsg/>
      <PageHeading
        heading="Previous Send Kit"
        // subHeading={dashboard?.name}
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "New Sms Send",
            className: "button",
            onClick:() => navigate('SEND_NEW_SMS_PAGE')
          },
        ]}
        
      />
      <p className='totalcount'>Total Count  - {Smskit.totalCount}</p>
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
        <Pagination meta={pagination.meta}next={fetchsendkit}/>
      </div>
  )
}

export default Sendkit
