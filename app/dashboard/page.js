import React from 'react'
import PageHeading from '@/components/core/PageHeading'

const dashboardPage = () => {
  return (
    <div className="main">
      <PageHeading
        heading="Dashboard"
        // subHeading={dashboard?.name}
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "Add User",
            className: "button",
            // icon: icons.Icon19,
            // onClick: () => props.openDrawer({
            //     title: dashboard.name,
            //     component: "DASHBOARD_COMMENT",
            //     dashboard: dashboard
            // })
          },
        ]}
      />
      <div className="container">
        hii

      </div>
    </div>
  )
}

export default dashboardPage
