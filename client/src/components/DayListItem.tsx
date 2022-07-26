import './styles/dayListItem.scss';

// = type definitions =
interface Props {
  name: IDay['name'];
  selected: boolean;
  spots: IDay['spots'];
  handleClick: () => void;
};

const formatSpots = (spots?: number) => {
  if (spots === 0) return <>no spots remaining</>;
  if (spots === 1) return <>1 spot remaining</>;
  return <>{spots} spots remaining</>;
};

const DayListItem: React.FC<Props> = (props) => {
  const dayListItemClass: cssClass = (
    'day-list__item '
    + (props.selected ? 'day-list__item--selected ' : '')
    + (props.spots === 0 ? ' day-list__item--full ' : '')
  );

  return (
    <li
      className={dayListItemClass}
      onClick={props.handleClick}
      data-testid={'day'}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};

export default DayListItem;