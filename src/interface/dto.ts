type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export interface IBase {
  version: string;
  status: number;
  nowWeek: number;
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

export interface IExamGradeDto extends Pick<IBase, 'version' | 'status'> {
  data: IExamGradeData[];
}
