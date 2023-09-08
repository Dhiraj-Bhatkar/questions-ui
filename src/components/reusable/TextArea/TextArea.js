import React from "react";

export const TextArea = (props) => {
  const { lbl, name, fnChange, required, errorMsg } = props;
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>
          {lbl} {required && <span className="text-danger">*</span>}:
        </b>
      </div>
      <div className="col-sm-3">
        <textarea
          onChange={fnChange}
          className="form-control"
          name={name}
        ></textarea>
      </div>
      <div className="col-sm-4 text-start">
        <b className="text-danger">{errorMsg}</b>
      </div>
    </div>
  );
};
