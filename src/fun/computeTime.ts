import dayjs from 'dayjs';

const nowWeek = sessionStorage.getItem('nowWeek');

export default (week: string, weekday: string) => {
  const tillDay = nowWeek
    ? (Number(week) - 1) * 7 +
      Number(weekday) -
      ((Number(nowWeek) - 1) * 7 + dayjs().get('day'))
    : 0;
  const msg = tillDay > 0 ? '还有' : '已过';
  return `${dayjs()
    .add(tillDay, 'day')
    .format('MM-DD')} - ${msg}${Math.abs(tillDay)}天`;
};
