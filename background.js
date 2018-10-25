// This event listener was made taken from:
// https://developer.chrome.com/extensions/tabs
// &
// https://stackoverflow.com/questions/6168124/chrome-extension-javascript-why-is-this-firing-twice



chrome.tabs.onUpdated.addListener(function (tabid, changeinfo, tab) {
    var url = tab.url
	var web;
	let test = "test";	
	let array;
       
		//if(JSON.parse(result.lehed/.indexOfUrls)>-1
		
	
    if (url !== undefined && changeinfo.status == "complete") {
		chrome.storage.local.get(['lehed'], function(result) {
			web = result.lehed;
			web = web.replace("[", "");
			web = web.replace("]", "");
			web = web.replace(/"/g, '');
			array = web.split(",");
			console.log(array);
			
			for (var i = 0, len = array.length; i < len; ++i){
				if(url === array[i]){
				alert("Seda lehte ei ole lubatud kuvada!");
				chrome.tabs.update(null, {url: "https://google.com"});
				
			
			}
		}
			//console.log(web)//JSON.parse(result.lehed)
			});
			
			
			


			
    }	
});