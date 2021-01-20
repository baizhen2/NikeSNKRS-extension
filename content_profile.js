chrome.runtime.sendMessage({method: "getProfile", key: "totalProfile"}, function(response) {
  var profile = response.data;
  var splitted = profile.split("|||");

  var firstName = splitted[0];
  var lastName = splitted[1];
  var addressOne = splitted[2];
  var addressTwo = splitted[3];
  var zip = splitted[4];
  var city = splitted[5];
  var state = splitted[6];
  var country = splitted[7];
  var phone = splitted[8];
  var card = splitted[9];
  var month = splitted[10];
  var year = splitted[11];
  var cvv = splitted[12];

  //shipping form
  document.getElementById("first-name-shipping").value = firstName;
  document.getElementById("last-name-shipping").value = lastName;
  document.getElementById("shipping-address-1").value = addressOne;
  document.getElementById("shipping-address-2").value = addressTwo
  document.getElementById("city").value = city;
  document.getElementById("state").value = state;
  document.getElementById("zipcode").value = zip;
  document.getElementById("phone-number").value = phone;
  
  //save&continue 1
  setTimeout(() => { document.getElementsByTagName("button")[12].click(); }, 7000);

  //save&continue 2 
  setTimeout(() => { document.getElementsByTagName("button")[13].click(); }, 2000);

  //new card 
  setTimeout(() => { document.getElementsByTagName("button")[14].click(); }, 2000);
  
  document.getElementById("creditCardNumber").value = card;
  document.getElementById("expirationDate").value = month + "/" + year;
  document.getElementById("cvNumber").value = cvv;

  //save&continue for card 1
  setTimeout(() => { document.getElementsByTagName("button")[14].click(); }, 2000);
  
  //save&continue for card 2
  setTimeout(() => { document.getElementsByTagName("button")[16].click(); }, 2000);
});