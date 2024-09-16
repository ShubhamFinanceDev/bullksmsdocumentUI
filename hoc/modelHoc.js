import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LogoutModel from "@/components/model/LogoutModel";

const initialState = {
  show: false,
  key: null,
  size: "md",
  centered: true,
  keyboard: false,
};

const ModelMap = {
  LOGOUT: LogoutModel,
};

const modelHoc = (Component) => {
  return function ModelComponent(props) {
    const [modelState, setModelState] = useState({ ...initialState });

    const closeModel = () => setModelState({ ...initialState });
    const openModel = (e) => setModelState({ show: true, ...e });

    const ModalComponent = ModelMap[modelState.key];

    return (
      <>
        {modelState.show && ModalComponent && (
          <Modal
            show={modelState.show}
            onHide={closeModel}
            backdrop="static"
            size={modelState.size}
            centered={modelState.centered}
            keyboard={modelState.keyboard}
          >
            <ModalComponent
              openModel={openModel}
              closeModel={closeModel}
              {...modelState}
            />
          </Modal>
        )}
        <Component {...props} openModel={openModel} closeModel={closeModel} />
              </>
    );
  };
};

export default modelHoc;
