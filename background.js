function play(){
    chrome.tabs.query({url:['https://listen.tidal.com/*']}, function(tabsArray) {
        chrome.tabs.executeScript(tabsArray[0]['id'], {
            file: 'play.js'
        });
    });	
}

chrome.browserAction.onClicked.addListener(function (tab) {
    play();
});

chrome.commands.onCommand.addListener(function(command) {
    play();
});