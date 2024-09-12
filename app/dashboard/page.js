'use client'

import React from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'

const dashboardPage = (props) => {
  return (
    <div className="main">
    <ValidationMsg/>
      <PageHeading
        heading="Dashboard"
        // subHeading={dashboard?.name}
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "Add User",
            className: "button",
            onClick: () => props.openDrawer({
                title: "SingUp",
                component: "SINGUP",
            })
          },
        ]}
        
      />
      <div className="container">

      </div>
    </div>
  )
}

export default Drawer(dashboardPage)
