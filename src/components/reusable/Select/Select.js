import React from "react";

export const Select = (props) => {
  const { lbl, name, options, fnChange, required, errorMsg } = props;
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>
          {lbl} {required && <span className="text-danger">*</span>}:
        </b>
      </div>
      <div className="col-sm-3">
        <select onChange={fnChange} name={name} className="form-control">
          <option value="">Please Select</option>
          {options.map((val, ind) => {
            return <option key={"opttion_" + ind}>{val}</option>;
          })}
        </select>
      </div>
      <div className="col-sm-4 text-start">
        <b className="text-danger">{errorMsg}</b>
      </div>
    </div>
  );
};
