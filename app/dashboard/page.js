'use client'

import React,{useEffect} from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import { icons } from '@/env/icons'
import useFormHooks from '@/hooks/useFormHooks'
import { useSelector } from "react-redux";

const dashboardPage = (props) => {
  const {fetchDashboardData}=useFormHooks()
  const { dashboarddata} = useSelector((state) => state.dashboardSlice);
  const {dataLists} = dashboarddata
  useEffect(() => {
    fetchDashboardData()
     },[])

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
              component: "SINGUP",
            })
          },
        ]}
      />
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card orange-card">
            <div className="card-body">
            <div>
            <img src={icons.Icon07} alt="download"/>
              <h4>Download</h4>
              </div>
              <p>{dashboarddata.downloadCount}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card blue-card">
            <div className="card-body">
              <div>
               <img src={icons.Icon08} alt="download"/>
              <h4>Messages</h4>
              </div>
              <p>{dashboarddata.smsCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive table-container mt-4">
          {/* <h3 className="mb-2">Download Files :</h3> */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Category</th>
                <th>Phone No</th>
                <th>Sms Time</th>
                <th>Last Download</th>
              </tr>
            </thead>
            
            <tbody>
              {dataLists?.map((dashboard, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dashboard.category}</td>
                  <td>{dashboard.phoneNo}</td>
                  <td>{new Date(dashboard.smsTimeStamp).toLocaleString()}</td>
                  <td>
                  {new Date(dashboard.lastDownload).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Drawer(dashboardPage)
