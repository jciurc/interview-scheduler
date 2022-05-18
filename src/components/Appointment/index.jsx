import React, { useState } from "react";
import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Show from "./Show";
import Status from "./Status";
import './styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      {props.time && <p>Appointment for {props.time}</p>}

{/*
      <Confirm />
      <Empty />
      <Error /> */}
      {/* <Form /> */}
      {/* <Show />
      <Status /> */}

    </article>
  );
}