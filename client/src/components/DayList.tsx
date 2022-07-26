import DayListItem from './DayListItem';
import ToggleButton from './ToggleButton';

interface Props {
  days: IDay[];
  value: IDay['name'];
  setDay: (name: IDay['name']) => void;
  toggleDark: ToggleDark;
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
      <ToggleButton toggleDark={props.toggleDark} />
    </ul>
  );
};

export default DayList;