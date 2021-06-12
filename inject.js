chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log("mess ",message);
        switch(message.type) {
            case "setSpeed": {
                console.log
                var vid = document.getElementsByTagName('video');
                if (vid.length == 0) {
//                    alert("No video elements found in this page.");
                }
                else {
                    var rate = message.speed;
                    if (rate) 
                      for(let v of vid) 
                        v.playbackRate = rate;
                }            
            }
                
            break;
        }
    }
);

