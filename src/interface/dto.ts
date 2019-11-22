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
