import dayjs from 'dayjs';
import { useMemo } from 'react';

export default (week: string, weekday: string) => {
  const nowWeek = sessionStorage.getItem('nowWeek');
  const usDay = dayjs().get('day');
  const day = usDay || 7;
  const tillDay = nowWeek
    ? Number(week) * 7 + Number(weekday) - (Number(nowWeek) * 7 + day)
    : 0;
  const msg = tillDay > 0 ? '还有' : '已过';
  return useMemo(
    () =>
      `${dayjs()
        .add(tillDay, 'day')
        .format('MM-DD')} - ${msg}${Math.abs(tillDay)}天`,
    [msg, tillDay],
  );
};
