import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

const formatSpots = (spots) => {
  if (spots === 0) return <>no spots remaining</>;
  if (spots === 1) return <>1 spot remaining</>;
  if (spots > 1) return <>{spots} spots remaining</>;
}

export default function DayListItem(props) {
  const buttonClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  return (
    <li
      className={buttonClass}
      selected={props.selected}
      onClick={() => props.setDay ? props.setDay(props.name) : null}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}