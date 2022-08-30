import jwt_decode from "jwt-decode";

export const getJwtPayload = (jwt: string): any => {
  if (typeof jwt !== 'string') {
    return null;
  }

  if (jwt.trim() === '') {
    return null;
  }

  let payload: any = {};
  payload = jwt_decode(jwt);

  return payload;
};

export const isJwtExpired = (jwt: string): boolean => {
  let payload: any = {};
  try {
    payload = getJwtPayload(jwt);
  } catch (e) {
    return true;
  }

  const currentDate = (new Date()).getTime();
  const tempDate = (new Date(payload.exp)).getTime();
  const expiredDateString = tempDate + '';
  const expiredDate = Number(expiredDateString.concat('000'));

  return expiredDate <= currentDate;
};