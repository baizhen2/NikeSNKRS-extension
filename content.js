document.getElementsByTagName("button")[2].click();

//retrieves account information from localStorage and autofills it
chrome.runtime.sendMessage({method: "getTotal", key: "total"}, function(response) {
  var total = response.data;
  var splitTotal = total.split("|||");

  var accountContent = splitTotal[0];
  var passwordContent = splitTotal[1];

  var emailField = document.getElementsByTagName("input")[1];
  var passwordField = document.getElementsByTagName("input")[2];
  

  emailField.value = accountContent;
  passwordField.value = passwordContent;

  //click Sign in 
  setTimeout(() => { document.getElementsByTagName("input")[5].click(); }, 3000);
  
});

document.getElementsByTagName("input")