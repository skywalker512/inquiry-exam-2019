export interface IBase {
  version: string;
  status: number;
}

export interface IExamScheduleData {
  student: string;
  course: string;
  classroom: string;
  seat: string;
  week: string;
  weekday: string;
  begin_time: string;
  end_time: string;
  status: string;
}

export interface IExamScheduleDto extends IBase {
  data: IExamScheduleData[];
}

export interface IExamGradeData {
  course: string;
  grade: string;
  property: string;
  status: string;
  student: string;
  term: string;
}

export interface IExamGradeDto extends IBase {
  data: IExamGradeData[];
}
