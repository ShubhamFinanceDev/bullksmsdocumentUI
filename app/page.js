'use client'

import React from 'react'
import { InputWithLabel } from '@/components/core/Input'
import {icons} from '@/env/icons'
import useAuthHooks from '@/hooks/useAuthHooks'
import ValidationMsg from '@/components/core/Input/ValidationMsg'


function SingInPages() {
  const { authBody, siginSubmitHandler, siginChangeHandler } = useAuthHooks()
  return (
    <div className="container">
      <div className="login-page-outer-container">
        <form
          onSubmit={siginSubmitHandler}
          className="login-form-inner-container">
          {/* <img src={icons.LOGO} alt="Logo" className='mb-3' /> */}
          <div><h3>Sign in</h3></div>
           <ValidationMsg/>
          <InputWithLabel
            feilds={{
              label: "Email",
              name: "emailId",
              type: "email",
              isRequired: true,
            }}
            state={authBody}
            onChangeHandler={siginChangeHandler}
          />
          <InputWithLabel
            feilds={{
              label: "Password",
              name: "password",
              type: "password",
              isRequired: true,
            }}
            state={authBody}
            onChangeHandler={siginChangeHandler}
          />
          <div className="row">
            <div className="col-12">
              <button type="submit" className={`btn btn-primary w-100 mt-4`}>Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingInPages