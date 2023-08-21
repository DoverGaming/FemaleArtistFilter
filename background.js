console.log('Background script is running.');
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Tab updated.', tabId, changeInfo, tab);
})