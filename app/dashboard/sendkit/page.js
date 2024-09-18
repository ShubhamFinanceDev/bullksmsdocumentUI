'use client'

import React, {useEffect} from 'react'
import PageHeading from '@/components/core/PageHeading'
import Drawer from '@/hoc/drawerHoc'
import ValidationMsg from '@/components/core/Input/ValidationMsg'
import useFormHooks from '@/hooks/useFormHooks'

const Sendkit = (props) => {

    const {fetchsendkit}=useFormHooks()

    useEffect(() => {
        fetchsendkit()
    }, [])

  return (
    <div className="main">
    <ValidationMsg/>
      <PageHeading
        heading="Send Kit"
        // subHeading={dashboard?.name}
        showSearchInput={false}
        bypassSecurity={true}
        btns={[
          {
            label: "New",
            className: "button",
            onClick: () => props.openDrawer({
                title: "New Send Kit:",
                component: "NEW_SENDKIT",
            })
          },
        ]}
        
      />
      <div className="container">

      </div>
    </div>
  )
}

export default Drawer(Sendkit)
