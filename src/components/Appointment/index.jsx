import React, { useState } from "react";
import Header from "./Header";
import Empty from "./Empty";
import './styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {props.time && <p>Appointment for {props.time}</p>}

      <Empty />
    </article>
  );
}