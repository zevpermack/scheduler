import React from 'react';
import DayListItem from 'components/DayListItem';

export default function DayList(props) {
  const { onChange } = props;
  const dayList = props.days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={() => onChange(day.name)}
    />
  ));

  return (
    <ul>
      {dayList}
    </ul>
  );
}
