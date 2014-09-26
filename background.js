chrome.runtime.onInstalled.addListener(function() {
	//chrome.storage.local.set(object items, function callback);
	// chrome.storage.sync.set({'value': theValue}, function() {
	// 	// Notify that we saved.
	// 	message('Settings saved');
	// });
});
chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('/HTML/window.html', {
		'bounds': {
			'width': 1000,
			'height': 800
		},
		"state": "maximized",
	});
});
chrome.runtime.onSuspend.addListener(function() {
  // Do some simple clean-up tasks.
});
