import { useMemo } from 'react';

export default () =>
  useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const isFirstTerm = month >= 9;
    const firstYear = isFirstTerm ? year : year - 1;
    const lastYear = isFirstTerm ? year + 1 : year;
    const termName = isFirstTerm ? '上' : '下';
    return `${firstYear}-${lastYear}${termName}学期`;
  }, []);
