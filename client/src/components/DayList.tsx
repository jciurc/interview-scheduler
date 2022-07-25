import DayListItem from './DayListItem';

interface Props {
  days: Day[];
  value: Day['name'];
  setDay: (name: Day['name']) => void;
  classes: string;
};

const DayList: React.FC<Props> = (props) => {
  const dayListItems = props.days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      handleClick={() => props.setDay(day.name)}
    />)
  );

  return (
    <ul className={props.classes}>
      {dayListItems}
    </ul>
  );
};

export default DayList;