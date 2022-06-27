import queryString from 'query-string';

export const getUrlQueryParams = (): any => {
  const parsed = queryString.parse(location.search);
  return parsed;
};

export const getUrlQueryParamsToString = (parsed: any): string => {
  const stringified = queryString.stringify(parsed);
  return stringified;
};
