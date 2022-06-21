export const checkChildDom = (target: HTMLElement | null, callback: (event: MutationRecord[]) => void, options?: MutationObserverInit): MutationObserver | null => {
  if (target === null) {
    console.error('target 이 null 입니다.');
    return null;
  }

  const observer = new MutationObserver((_mutations) => {
    callback(_mutations);
  });

  const option = {
    attributes: typeof options?.attributes === 'boolean' ? options?.attributes : true,
    childList: typeof options?.childList === 'boolean' ? options?.childList : true,
    characterData: typeof options?.characterData === 'boolean' ? options?.characterData : true,
  };

  observer.observe(target, option);
  return observer;
};

export const mutationObserverDisconnect = (observer: MutationObserver): boolean => {
  observer.disconnect();
  return true;
};
