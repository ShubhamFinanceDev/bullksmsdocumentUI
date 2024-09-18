'use client'

import React from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import { icons } from '@/env/icons'
const dashboardPage = (props) => {
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
            <img src={icons.Icon07} alt="download"/>
              <h1>Download</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card blue-card">
            <div className="card-body">
            <img src={icons.Icon08} alt="download"/>
              <h1>SMS Send</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer(dashboardPage)
