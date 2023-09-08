"use client";
import React, { useState } from "react";
import { TextArea } from "../reusable/TextArea";
import { Input } from "../reusable/Input";
import { inputControls } from "./configurations";
import { Select } from "../reusable/Select";
import { fnValidate } from "@/includes/common/Validations";
export const Question = () => {
  const [input, setInput] = useState(inputControls);

  const fnChange = (eve) => {
    const { value, name } = eve.target;
    const _input = [...input];
    const _inputObj = _input.find((obj) => name === obj.name);
    _inputObj.value = value;
    if (_inputObj.required) {
      fnValidate(_inputObj);
      setInput(_input);
    }
  };
  const fnSubmit = () => {
    const _input = [...input];
    _input.forEach((obj) => {
      if (obj.required) {
        fnValidate(obj);
      }
    });
    const isInValid = _input.some((obj) => obj.errorMsg);
    if (isInValid) {
      setInput(_input);
      return;
    }
    alert("sending  the requiest to the node app to save the data in monogdb");
  };
  return (
    <div className="mt-5 container-fluid">
      {input.map((obj, ind) => {
        const attr = { ...obj, fnChange };
        switch (obj.tag) {
          case "input":
            return <Input key={"input_" + ind} {...attr} />;
          case "textarea":
            return <TextArea key={"ta" + ind} {...attr} />;
          case "select":
            return <Select key={"select" + ind} {...attr} />;
        }
      })}
      <div className="row">
        <div className="offset-5 col-7">
          <button onClick={fnSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
