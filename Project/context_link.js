chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'onboarding.html'
        });
    }
});

var MenuItem = {
    "id": "Phish_detect",
    "title": "Phishing_Detector_Tool",
    "contexts": ["selection"]
};
chrome.contextMenus.create(MenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Phish_detect" && clickData.selectionText){  
        link="http://127.0.0.1:8000/?u1=";
        var keyword=clickData.selectionText;  
        var link = link + keyword ;
        chrome.tabs.create({ url: link });
    }
});


