import { useMemo } from 'react';

export default () =>
  useMemo(() => Number(localStorage.getItem('inquiry-exam-stu-num')), []);
