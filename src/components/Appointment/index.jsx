import React, { useState } from "react";
import './styles.scss';

export default function Appointment(props){
  return (
    <article className="appointment">
      <h2>helo</h2>
      {props.time && <p>Appointment for {props.time}</p>}
    </article>
  );
}