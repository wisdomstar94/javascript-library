export const getDateInfoFromString = (value: any) => {
  const returnData = {
    isValid: false,
    year: 0,
    month: 0,
    date: 0,
    dateString: '',
  };

  if (typeof value !== 'string') {
    return returnData;
  }

  if (value.trim() === '') {
    return returnData; 
  }

  const splitArray = value.split('-');
  if (splitArray.length !== 3) {
    returnData.isValid = false;
    return returnData;
  }

  const year = splitArray[0];
  if (year.length !== 4) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(year))) {
    returnData.isValid = false;
    return returnData;
  }

  const month = splitArray[1];
  if (month.length !== 2) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(month))) {
    returnData.isValid = false;
    return returnData;
  }

  const date = splitArray[2];
  if (date.length !== 2) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(date))) {
    returnData.isValid = false;
    return returnData;
  }

  returnData.isValid = true;
  returnData.year = Number(year);
  returnData.month = Number(month);
  returnData.date = Number(date);
  returnData.dateString = year + '-' + month + '-' + date;
  return returnData;  
};
