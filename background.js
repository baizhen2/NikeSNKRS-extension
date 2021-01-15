var ip = localStorage.getItem('ip');
var port = localStorage.getItem('port');
var username = localStorage.getItem('username');
var password = localStorage.getItem('proxyPassword');

var config = {
  mode: "fixed_servers",
  rules: {
  singleProxy: {
      scheme: "http",
      host: ip,  //ip here
      port: parseInt(port) //port here
  },
  bypassList: ["localhost"]
  }
};

chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

function callbackFn(details) {
  return {
    authCredentials: {
        username: username, //username here
        password: password //password here
    }
  };
}

chrome.webRequest.onAuthRequired.addListener(
  callbackFn,
  {urls: ["<all_urls>"]},
  ['blocking']
);