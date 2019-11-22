const getTerm = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const isFirstTerm = month >= 9;
  const firstYear = isFirstTerm ? year : year - 1;
  const lastYear = isFirstTerm ? year + 1 : year;
  const termName = isFirstTerm ? '上' : '下';
  console.log(2);
  return `${firstYear}-${lastYear}${termName}学期`;
};

const getStuNum = () =>
  Number(localStorage.getItem('inquiry-exam-stu-num')) || 0;

const getStuName = () => localStorage.getItem('inquiry-exam-stu-name') || '';

export default {
  term: getTerm(),
  stuNum: getStuNum(),
  stuName: getStuName(),
};
