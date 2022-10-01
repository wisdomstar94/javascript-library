import { ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAngularUtilLibrary } from "./angular-util.interface";

export const getAngularRouteParams = (params:  IAngularUtilLibrary.GetRouteParamsParams): string | null => {
  let result: null | string = null;

  let target: ActivatedRoute | null = params.route;
  for (let i = 0; i < 100; i++) {
    if (target === null) {
      break;
    }

    const paramValue = target.snapshot.params[params.paramName];
    if (paramValue !== undefined) {
      result = paramValue;
      break;
    } else {
      target = target.parent;
    }
  }

  return result;
};

export function getAngularElement<T extends HTMLElement>(elementRef: ElementRef | undefined): T | null {
  if (elementRef === undefined || elementRef === null) {
    return null;
  }

  return elementRef.nativeElement;
};
