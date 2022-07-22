import DayListItem from './DayListItem';

interface Props {
  days: Day[];
  value: Day['name'];
  setDay: (name: Day['name']) => void;
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
    <ul>
      {dayListItems}
    </ul>
  );
};

export default DayList;