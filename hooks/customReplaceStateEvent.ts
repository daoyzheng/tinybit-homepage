const useReplaceStateEvent = (hash: string) => {
  function triggerReplaceStateEvent() {
    const replaceStateEvent = new CustomEvent<string>('onreplacestate', { detail: hash })
    document.dispatchEvent(replaceStateEvent)
  }
  return triggerReplaceStateEvent
}

export default useReplaceStateEvent