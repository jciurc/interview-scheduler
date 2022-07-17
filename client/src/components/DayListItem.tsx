import './styles/dayListItem.scss';
import classNames from "classnames";

// = type definitions =
interface Props {
  name: Day['name'];
  selected: boolean;
  spots: Day['spots'];
  handleClick: () => void;
};

const formatSpots = (spots?: number) => {
  if (spots === 0) return <>no spots remaining</>;
  if (spots === 1) return <>1 spot remaining</>;
  return <>{spots} spots remaining</>;
};

const DayListItem: React.FC<Props> = (props) => {
  const buttonClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  return (
    <li
      className={buttonClass}
      onClick={props.handleClick}
      data-testid={'day'}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};

export default DayListItem;