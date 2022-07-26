import DayListItem from './DayListItem';
import ToggleButton from './ToggleButton';

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
      <ToggleButton />
    </ul>
  );
};

export default DayList;