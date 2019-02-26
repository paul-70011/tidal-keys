function play(){
    chrome.tabs.query({url:['https://listen.tidal.com/*']}, function(tabsArray) {
        chrome.tabs.executeScript(tabsArray[0]['id'], {
            file: 'play.js'
        });
    });	
}

function previous(){
    chrome.tabs.query({url:['https://listen.tidal.com/*']}, function(tabsArray) {
        chrome.tabs.executeScript(tabsArray[0]['id'], {
            file: 'previous.js'
        });
    });	
}

function next(){
    chrome.tabs.query({url:['https://listen.tidal.com/*']}, function(tabsArray) {
        chrome.tabs.executeScript(tabsArray[0]['id'], {
            file: 'next.js'
        });
    });	
}

chrome.browserAction.onClicked.addListener(function (tab) {
    play();
});

chrome.commands.onCommand.addListener(function(command) {
    switch(command){
        case "play":
            play();
            break;
        case "previous":
            previous();
            break;
        case "next":
            next();
            break;
    }
});