import React, { Fragment } from "react";

export const Input = (props) => {
  const { lbl, name, type, options, fnChange, required, errorMsg } = props;
  const fnGetInutControl = () => {
    switch (type) {
      case "text":
        return (
          <input
            onChange={fnChange}
            className="form-control"
            type={type}
            name={name}
          />
        );
      case "radio":
        return (
          <Fragment>
            {options.map((opt, ind) => {
              return (
                <Fragment key={"frag_" + ind}>
                  <input type={type} name={name} onChange={fnChange} />
                  <span className="ms-2 me-3">{opt}</span>
                </Fragment>
              );
            })}
          </Fragment>
        );
    }
  };
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>
          {lbl}
          {required && <span className="text-danger">*</span>}:
        </b>
      </div>
      <div className="col-sm-3">{fnGetInutControl()}</div>
      <div className="col-sm-4 text-start">
        <b className="text-danger">{errorMsg}</b>
      </div>
    </div>
  );
};
