import useSWR from 'swr';
import { useMemo } from 'react';
import config from '../config';
import { IExamScheduleDto } from '../interface/dto';

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

export const useExamSchedule = (stuNum: number) => {
  const params = useMemo(() => ({ stuNum }), [stuNum]);
  return useSWR<IExamScheduleDto>(
    [`${config.beUrl}/examSchedule`, params],
    fetcher,
  );
};
