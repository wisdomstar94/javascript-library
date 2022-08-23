import { getDateInfoFromString } from "../../date-info-from-string/all/date-info-from-string";

export const getDateBetweenMonthCount = (startDate: string, endDate: string) => {
  const startDateInfo = getDateInfoFromString(startDate);
  if (!startDateInfo.isValid) {
    throw new Error(`startDate 가 date 형식이 아닙니다.`);
  }

  const endDateInfo = getDateInfoFromString(endDate);
  if (!endDateInfo.isValid) {
    throw new Error(`endDate 가 date 형식이 아닙니다.`);
  }

  const startDateObj = new Date();
  startDateObj.setFullYear(startDateInfo.year);
  startDateObj.setMonth(startDateInfo.month - 1);
  startDateObj.setDate(1);

  const endDateObj = new Date();
  endDateObj.setFullYear(endDateInfo.year);
  endDateObj.setMonth(endDateInfo.month - 1);
  endDateObj.setDate(27);

  let monthCount = 0;
  let checkCount = 0;

  for (let i = 0; i < 100000; i++) {
    checkCount++;
    endDateObj.setMonth(endDateObj.getMonth() - 1);

    if (startDateObj.getTime() < endDateObj.getTime()) {
      monthCount++;
    } else {
      break;
    }
  }

  return monthCount;
};
