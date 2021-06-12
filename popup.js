document.getElementById('go').addEventListener('click',
    go);
    
function go() {
    speed = document.getElementById("speed").value;
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        try {
        chrome.tabs.sendMessage(tabs[0].id, {type:"setSpeed", speed:speed}, function(response){
            window.close();
        });
        }
        catch(err) {}
    });
}
