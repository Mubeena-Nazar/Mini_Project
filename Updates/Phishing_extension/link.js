chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'onboarding.html'
        });
    }
});

/* Extension for VirusTotal  */
function len1() {
    var b1 = document.getElementById("box1").value;
    var link = "https://www.virustotal.com/gui/domain/" + b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("myButton1").addEventListener("click", myFunction1);

function myFunction1() {
    len1();
}


/* Extension for SSLTrust  */
function len2() {
    var b1 = document.getElementById("box1").value;
    var link = "https://www.ssltrust.in/ssl-tools/website-security-check?domain=" + b1;
    chrome.tabs.create({ url: link });
}

document.getElementById("myButton2").addEventListener("click", myFunction2);

function myFunction2() {
    len2();
}