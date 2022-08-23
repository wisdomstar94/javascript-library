export declare namespace ITimeInfoFromTimestamp {
  export type TimeInfoStatus = 'high' | 'middle' | 'low';
  export interface TimeInfo {
    hour: number;
    minute: number;
    second: number;
    status: TimeInfoStatus;
    text: string;
  }
}

export const getTimeInfoFromTimestamp = (remain: number): ITimeInfoFromTimestamp.TimeInfo => {
  // hour 구하기
  let hour = Math.floor(remain / (1000 * 60 * 60));

  // minute 구하기
  const hourRemain = hour * (1000 * 60 * 60);
  let minute = Math.floor((remain - hourRemain) / (1000 * 60));

  // second 구하기
  const minuteRemain = minute * (1000 * 60);
  let second = Math.floor((remain - (hourRemain + minuteRemain)) / 1000);

  let status: 'high' | 'middle' | 'low' = 'low';
  if (hour > 1) {
    status = 'high';
  } else if (minute > 5) {
    status = 'middle';
  }

  if (hour < 0) {
    hour = 0;
    minute = 0;
    second = 0;
  }

  return {
    hour,
    minute,
    second,
    status,
    text: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`,
  };
};