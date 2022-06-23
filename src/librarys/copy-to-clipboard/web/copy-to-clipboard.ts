import ClipboardJS from 'clipboard';
import { checkChildDom, mutationObserverDisconnect } from '../../check-child-dom/web/check-child-dom';

export declare namespace ICopyToClipboard {
  export interface Result extends ClipboardJS.Event {
    result?: 'success' | 'error';
  }
}

export const copyToClipboard = (text: string): Promise<ICopyToClipboard.Result> => {
  const btnElement = document.createElement('button');
  btnElement.classList.add('btn');
  btnElement.setAttribute('data-clipboard-text', text);
  btnElement.style.opacity = '0';
  btnElement.style.position = 'fixed';
  btnElement.style.top = '0';
  btnElement.style.left = '-9000px';
  btnElement.style.width = '1px';
  btnElement.style.height = '1px';
  btnElement.style.overflow = 'hidden';

  const disposeFinally = (observer: MutationObserver | null) => {
    document.querySelector('body')?.removeChild(btnElement);
    if (observer !== null) {
      mutationObserverDisconnect(observer);
    }
  };

  return new Promise(function(resolve, reject) {
    const observer = checkChildDom(document.querySelector('body'), (event) => {
      // btnElement 추가시 호출되는 콜백함수
      const clipboard = new ClipboardJS(btnElement);
      clipboard.on('success', function (e: ICopyToClipboard.Result) {
        disposeFinally(observer);
        e.result = 'success';
        resolve(e);   
        e.clearSelection();
      });
      
      clipboard.on('error', function (e: ICopyToClipboard.Result) {
        disposeFinally(observer);
        e.result = 'error';
        reject(e);
      });

      btnElement.click();
    });

    document.querySelector('body')?.appendChild(btnElement);
  });
};
