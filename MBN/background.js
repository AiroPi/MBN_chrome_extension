chrome.browserAction.onClicked.addListener(
    function(tab) {
        chrome.tabs.create({url: "https://teleservices.ac-strasbourg.fr/login/ct_logon_vk.jsp?CT_ORIG_URL=%2Fsso%2FSSO%3FSPEntityID%3DSP-MonBureauNumerique-Production&ct_orig_uri=%2Fsso%2FSSO%3FSPEntityID%3DSP-MonBureauNumerique-Production"});
        chrome.tabs.executeScript({
                file: "connect.js"
        })
        chrome.tabs.onUpdated.addListener(function once(tabId, changeInfo, tab) {//add listener to the url
            if (!changeInfo.url) return
            if (!tab.url.startsWith("https://teleservices.ac-strasbourg.fr")) {
                if (tab.url === "https://www.monbureaunumerique.fr/") {
                    chrome.tabs.executeScript({
                        file: "connect.js"
                    })
                }
                chrome.tabs.onUpdated.removeListener(once)
            }
            
        })
    }
);
