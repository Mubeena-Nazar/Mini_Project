document.getElementById("write").value = window.location.search.slice(1);


function check1() {
    var b1 = document.getElementById("write").value;
    var link = "https://www.virustotal.com/gui/domain/"+ b1;
    //var link = "https://www.virustotal.com/gui/ip-address/"+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c1").addEventListener("click", check1);

function check2() {
    var b1 = document.getElementById("write").value;
    var link = "https://www.ipqualityscore.com/threat-feeds/malicious-url-scanner/https%3A%2F%2F"+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c2").addEventListener("click", check2);

function check3() {
    var b1 = document.getElementById("write").value;
    var link = "https://sitechecker.pro/app/main/website-safety-land?pageUrl="+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c3").addEventListener("click", check3);

function check4() {
    var b1 = document.getElementById("write").value;
    var link = "https://www.ssltrust.in/ssl-tools/website-security-check?domain="+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c4").addEventListener("click", check4);

function check5() {
    var b1 = document.getElementById("write").value;
    var link = "https://observatory.mozilla.org/analyze/"+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c5").addEventListener("click", check5);


function check6() {
    var b1 = document.getElementById("write").value;
    var link = "https://sitecheck.sucuri.net/results/"+ b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("c6").addEventListener("click", check6);
