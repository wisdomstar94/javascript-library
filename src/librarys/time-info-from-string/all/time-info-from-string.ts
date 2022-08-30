export const getTimeInfoFromString = (value: any) => {
  const returnData = {
    isValid: false,
    hour: 0,
    minute: 0,
    second: 0,
    timeString: '',
  };

  if (typeof value !== 'string') {
    return returnData;
  }

  if (value.trim() === '') {
    return returnData; 
  }

  const splitArray = value.split(':');
  if (splitArray.length !== 3) {
    returnData.isValid = false;
    return returnData;
  }

  const hour = splitArray[0];
  if (hour.length !== 2) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(hour))) {
    returnData.isValid = false;
    return returnData;
  }

  const minute = splitArray[1];
  if (minute.length !== 2) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(minute))) {
    returnData.isValid = false;
    return returnData;
  }

  const second = splitArray[2];
  if (second.length !== 2) {
    returnData.isValid = false;
    return returnData;
  }
  if (isNaN(Number(second))) {
    returnData.isValid = false;
    return returnData;
  }

  returnData.isValid = true;
  returnData.hour = Number(hour);
  returnData.minute = Number(minute);
  returnData.second = Number(second);
  returnData.timeString = hour + ':' + minute + ':' + second;
  return returnData;  
};
