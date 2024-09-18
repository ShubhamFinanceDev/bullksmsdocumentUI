import React,{useEffect} from "react";
import { InputWithLabel, SelectWithLabel } from "../Input";
import useAuthHooks from "@/hooks/useAuthHooks";
import ValidationMsg from "../Input/ValidationMsg";
import useFormHooks from '@/hooks/useFormHooks'

const Newsendkit = (props) => {
  const { closeDrawer } = props;
  const {sendkit, SendkitChangeHandler, SendkithandleSubmit}=useFormHooks()

  // useEffect(() => {
  //   SendkithandleSubmit()
  // }, [smsCategory, type])

  return (
    <div>
      <ValidationMsg />
      <form onSubmit={(e) => SendkithandleSubmit(e, closeDrawer)}>
        <SelectWithLabel
          feilds={{
            label: "Role",
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

        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary btn-sm mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsendkit;
