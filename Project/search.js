/* Extension for VirusTotal  */
function myFunction1() {
    var b1 = document.getElementById("box1").value;
    var link = "https://www.virustotal.com/gui/domain/" + b1;
    chrome.tabs.create({ url: link });
}
document.getElementById("myButton1").addEventListener("click", myFunction1);


/* Extension for API test  and providing alert  */
function len2() {
    link="http://127.0.0.1:8000/?u1=";
    url=document.getElementById('box1').value;
    link = link + url;
    chrome.tabs.create({ url: link });
    //window.location.replace(link);
}

document.getElementById("myButton2").addEventListener("click", myFunction2);

function myFunction2() {
    len2();
}


/* Extension for Integerated page  */
function len3() {
    var b1 = document.getElementById("box1").value;
    url=document.getElementById('box1').value;
    var link = "integerated_page.html?"+url ;
    chrome.tabs.create({ url: link });
}
document.getElementById("myButton3").addEventListener("click", myFunction3);

function myFunction3() {
    len3();
}
