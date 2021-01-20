window.onload = function() {
    document.getElementById('save').onclick = function() {
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var addressone = document.getElementById('Addy1').value;
        var addresstwo = document.getElementById('Addy2').value;
        var zip = document.getElementById('zip').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var country = document.getElementById('country').value;
        var phone = document.getElementById('phone').value;
        var card = document.getElementById('card').value;
        var month = document.getElementById('month').value;
        var year = document.getElementById('year').value;
        var cvv = document.getElementById('cvv').value;

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('addressone', addressone);
        localStorage.setItem('addresstwo', addresstwo);
        localStorage.setItem('zip', zip);
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
        localStorage.setItem('country', country);
        localStorage.setItem('phone', phone);
        localStorage.setItem('card', card);
        localStorage.setItem('month', month);
        localStorage.setItem('year', year);
        localStorage.setItem('cvv', cvv);

        var totalProfile = fname + "|||" + lname + "|||" + 
            addressone + "|||" + addresstwo + "|||" + zip + "|||" + city + "|||" + 
            state + "|||" + country + "|||" + phone + "|||" + card + "|||" + month + "|||" + 
            year + "|||" + cvv; 

        localStorage.setItem('totalProfile', totalProfile)

    }

    document.getElementById('reload').onclick = function() {
        document.getElementById('fname').value = localStorage.getItem('fname');
        document.getElementById('lname').value = localStorage.getItem('lname');
        document.getElementById('Addy1').value = localStorage.getItem('addressone');
        document.getElementById('Addy2').value = localStorage.getItem('addresstwo');
        document.getElementById('zip').value = localStorage.getItem('zip');
        document.getElementById('city').value = localStorage.getItem('city');
        document.getElementById('state').value = localStorage.getItem('state');
        document.getElementById('country').value = localStorage.getItem('country');
        document.getElementById('phone').value = localStorage.getItem('phone');
        document.getElementById('card').value = localStorage.getItem('card');
        document.getElementById('month').value = localStorage.getItem('month');
        document.getElementById('year').value = localStorage.getItem('year');
        document.getElementById('cvv').value = localStorage.getItem('cvv');
    }

    document.getElementById('fill').onclick = function() {
        var prefillLink = localStorage.getItem('fullLink') + "?size=10&productId=" + localStorage.getItem('productID');
        chrome.tabs.update({ url: prefillLink});
        setTimeout(() => { fillNike(); }, 5000); //5 seconds to load site
    }
}

function fillNike() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Injects JavaScript code into a page
        chrome.tabs.executeScript(tabs[0].id, {file: "content_profile.js"});
    });
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getProfile")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); // snub them.
});