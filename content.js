// This recives a message when the button in the right-click menu is clicked and calls the
// wrap function.

// Wrap is a function from the library that is being called as a result of this cdoe
// getSelection is the event it is listening for. This code allows for the code from
// the extension to interact with the webpage. I assuem the library code should
// not be able to listen to events on its own.

// this means that wrap will not complile, but jsut keep it for now
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.contextFired == "getSelection") sendResponse({selection: wrap()});
});
