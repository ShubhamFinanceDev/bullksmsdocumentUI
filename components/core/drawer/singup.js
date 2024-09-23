import React from 'react'
import { InputWithLabel, SelectWithLabel } from '../Input'
import useAuthHooks from '@/hooks/useAuthHooks'
import ValidationMsg from '../Input/ValidationMsg'

const Singup = (props) => {
  const { singUpState,singUpChangeHandler,singUpSubmitHandler} = useAuthHooks()
  const {closeDrawer}=props

  return (
    <div>
      <ValidationMsg/>
      <form onSubmit={e => singUpSubmitHandler(e, closeDrawer)}>
        <InputWithLabel
            feilds={{
              label: "First Name",
              name: "firstName",
              type: "text",
              isRequired: true,
            }}
            state={singUpState}
            onChangeHandler={singUpChangeHandler}
          />

        <InputWithLabel
            feilds={{
              label: "Last Name",
              name: "lastName",
              type: "text",
              isRequired: true,
            }}
            state={singUpState}
            onChangeHandler={singUpChangeHandler}
          />

          <InputWithLabel
            feilds={{
              label: "Email",
              name: "emailId",
              type: "email",
              isRequired: true,
            }}
            state={singUpState}
            onChangeHandler={singUpChangeHandler}
          />
          <InputWithLabel
            feilds={{
              label: "Password",
              name: "password",
              type: "password",
              isRequired: true,
            }}
            state={singUpState}
            onChangeHandler={singUpChangeHandler}
          />
 
           <InputWithLabel
            feilds={{
              label: "Mobile Number",
              name: "mobileNo",
              // type: "number",
              maxLength: 10,
              isRequired: true,
            }}
            state={singUpState}
            onChangeHandler={singUpChangeHandler}
          />

       <SelectWithLabel
          feilds={{
          label: "Role",
          name: "role",
          type: "select",
          options: [
            { name: "Admin", value: "ROLE_ADMIN" },
            { name: "User", value: "ROLE_USER" },
        ],
        isRequired: true,
          }}    
          state={singUpState}
          onChangeHandler={singUpChangeHandler}
       />

<div className="d-flex justify-content-end">
  <button className="btn btn-outline-primary btn-sm mt-4">Submit</button>
</div>
</form>
</div>
  )
}

export default Singup
