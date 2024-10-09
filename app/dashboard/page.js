'use client'

import React, { useEffect } from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import { icons } from '@/env/icons'
import useFormHooks from '@/hooks/useFormHooks'
import { useSelector } from "react-redux";
import Pagination from '@/components/core/Pagination'

const DashboardPage = (props) => {  
  const { fetchDashboardData,pagination } = useFormHooks()
  const { dashboarddata } = useSelector((state) => state.dashboardSlice);
  const { dataLists, smsCountByCategory,downloadCountByCategory} = dashboarddata;

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return (
    <div className="main">
      <ValidationMsg />
      <PageHeading
        heading="Dashboard"
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "Add User",
            className: "button",
            onClick: () => props.openDrawer({
              title: "SignUp",
              component: "SIGNUP",
            })
          },
        ]}
      />
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card orange-card">
          <h4 className='d-flex justify-content-center'><b>ADHOC</b></h4>
            <div className="card-body">
              <div>
                <img src={icons.Icon07} alt="download" />
                <h4>Downloads</h4>
                <p>{downloadCountByCategory?.ADHOC}</p>
              </div>
              <div>
                <img src={icons.Icon08} alt="send sms" />
                <h4>Send Sms</h4>
                <p>{smsCountByCategory?.ADHOC}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card blue-card">
          <h4 className='d-flex justify-content-center'><b>SOA</b></h4>
            <div className="card-body">
            <div>
                <img src={icons.Icon07} alt="download" />
                <h4>Downloads</h4>
                <p>{downloadCountByCategory?.SOA}</p>
              </div>
              <div>
                <img src={icons.Icon08} alt="send sms" />
                <h4>Send Sms</h4>
                <p>{smsCountByCategory?.SOA}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card blue-card">
               <h4 className='d-flex justify-content-center'><b>INTEREST_CERTIFICATE</b></h4>
            <div className="card-body">
            <div>
                <img src={icons.Icon07} alt="download" />
                <h4>Downloads</h4>
                <p>{downloadCountByCategory?.INTEREST_CERTIFICATE}</p>
              </div>
              <div>
                <img src={icons.Icon08} alt="send sms" />
                <h4>Send Sms</h4>
                <p>{smsCountByCategory?.INTEREST_CERTIFICATE|| 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive table-container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Loan No</th>
              <th>Phone No</th>
              <th>Category</th>
              <th>Sms Time</th>
              <th>Last Download</th>
              <th>Download Count</th>
            </tr>
          </thead>
          <tbody>
            {dataLists?.map((dashboard, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dashboard.loanNumber}</td>
                <td>{dashboard.mobileNumber}</td>
                <td>{dashboard.certificateCategory}</td>
                <td>{new Date(dashboard.smsTimeStamp).toLocaleString()}</td>
                <td>{new Date(dashboard.lastDownload).toLocaleString()}</td>
                <td>{dashboard.downloadCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={pagination.meta}next={fetchDashboardData}/>
      </div>
  )
}

export default Drawer(DashboardPage); 
