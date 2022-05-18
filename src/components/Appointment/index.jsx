import React, { useState } from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import './styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      {props.time && <p>Appointment for {props.time}</p>}
    </article>
  );
}