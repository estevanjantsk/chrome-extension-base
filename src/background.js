/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener((param) => {
  let shouldRun = 0;
  const ws = new WebSocket('ws://localhost:8080/ws');

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'ok' && shouldRun > 0) {
      chrome.runtime.reload();
    }

    if (data.type === 'ok') {
      shouldRun += 1;
    }
  };
});
