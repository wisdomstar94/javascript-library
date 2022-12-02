import { UAParser } from 'ua-parser-js';
import queryString from 'query-string';
import { IClientUtilLibrary } from './client-util.interface';

export const getBrowserInfo = () => {
  const parser = new UAParser();
  return parser.getBrowser();
};

export const getOsInfo = () => {
  const parser = new UAParser();
  return parser.getOS();
};

export const getDeviceInfo = () => {
  const parser = new UAParser();
  return parser.getDevice();
};

export const getUrlQueryParams = (): any => {
  const parsed = queryString.parse(location.search);
  return parsed;
};

export const getUrlQueryParamsToString = (parsed: any): string => {
  const stringified = queryString.stringify(parsed);
  return stringified;
};

export const getSearchQueryString = (queryStringObject: any): string => {
  const obj = queryStringObject;
  const keys = Object.keys(obj);
  const keyAndValuePair: string[] = [];
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'string') {
      keyAndValuePair.push(key + '=' + value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        keyAndValuePair.push(key + '=' + item);
      }
    }
  }
  return '?' + keyAndValuePair.join('&');
};

export const getFileNameAndTypeInfo = (fileName: string): IClientUtilLibrary.FileNameAndTypeInfo => {
  const returnResult: IClientUtilLibrary.FileNameAndTypeInfo = {
    name: '',
    type: '',
  };

  const fileNameDotSplit = fileName.split('.'); // ex) ['aaa'] or ['aa', 'a', 'png']

  if (fileNameDotSplit.length === 1) {
    // 확장자가 없는 경우
    returnResult.name = fileNameDotSplit[0];
    returnResult.type = '';
    return returnResult;
  }

  if (fileNameDotSplit.length === 2) {
    returnResult.name = fileNameDotSplit[0];
    returnResult.type = fileNameDotSplit[1];
    return returnResult;
  }

  const onlyFileNames = fileNameDotSplit.filter((value, index) => {
    if (index !== fileNameDotSplit.length - 1) {
      return true;
    }

    return false;
  });

  returnResult.name = onlyFileNames.join('.');
  returnResult.type = fileNameDotSplit[fileNameDotSplit.length - 1];

  return returnResult;
};

export const setStyle = (params: IClientUtilLibrary.SetStyleParams) => {
  if (params.element === undefined || params.element === null) {
    return;
  }

  if (!Array.isArray(params.styles)) {
    return;
  }

  for (const item of params.styles) {
    params.element.style[item.key as any] = item.value;
  }
};

export const goToScroll = (params: { 
  scrollContainerElement: HTMLElement | null | undefined;
  targetElement: HTMLElement | null | undefined;
}) => {
  if (params.scrollContainerElement === null || params.scrollContainerElement === undefined) {
    return;
  }

  if (params.targetElement === null || params.targetElement === undefined) {
    return;
  }

  params.scrollContainerElement.scrollTop = params.targetElement.clientTop;
};
