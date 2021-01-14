/*var config = {
  mode: "fixed_servers",
  rules: {
  singleProxy: {
      scheme: "http",
      host: "",  //ip here
      port: parseInt() //port here
  },
  bypassList: ["localhost"]
  }
};

chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

function callbackFn(details) {
return {
  authCredentials: {
      username: "", //username here
      password: "" //password here
  }
};
}

chrome.webRequest.onAuthRequired.addListener(
      callbackFn,
      {urls: ["<all_urls>"]},
      ['blocking']
);*/