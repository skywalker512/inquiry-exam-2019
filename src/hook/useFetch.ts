import useSWR from 'swr';
import { useMemo } from 'react';
import config from '../config';
import { IExamGradeDto, IExamScheduleDto } from '../interface/dto';

const fetcher = (initialUrl: string, postData: any) => {
  const searchParams = Object.keys(postData)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(postData[key])}`,
    )
    .join('&');
  return fetch(initialUrl, {
    method: 'POST',
    body: searchParams,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  }).then(r => r.json());
};

export const useExamSchedule = (stuNum: number, url: string) => {
  const params = useMemo(() => ({ stuNum }), [stuNum]);
  return useSWR<IExamScheduleDto>([`${config.beUrl}/${url}`, params], fetcher);
};

export const useExamGrade = (stuNum: number) => {
  const params = useMemo(() => ({ stuNum }), [stuNum]);
  return useSWR<IExamGradeDto>([`${config.beUrl}/examGrade`, params], fetcher);
};
