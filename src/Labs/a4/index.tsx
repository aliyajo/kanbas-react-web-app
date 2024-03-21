import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExample";

function Assignment4() {
    /* Function established for callback function */
    function sayHello() {
        alert("Hello from the function!");
      }
    
  return(
    <>
      <h1>Assignment 4</h1>
      <ClickEvent/><br />
      <PassingDataOnEvent/><br />
      <PassingFunctions theFunction={sayHello}/><br />
      <EventObject  /><br />
      <Counter /><br />
      <BooleanStateVariables /><br />
      <StringStateVariables /><br />
      <DateStateVariable /><br />
      <ObjectStateVariable /><br />
      <ArrayStateVariable /><br />
      <ParentStateComponent /><br />
      <ReduxExamples /> <br />
    </>
  );
};
export default Assignment4;