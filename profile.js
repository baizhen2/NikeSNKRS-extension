var myStorage = window.localStorage;

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

        myStorage.setItem('fname', fname);
        myStorage.setItem('lname', lname);
        myStorage.setItem('addressone', addressone);
        myStorage.setItem('addresstwo', addresstwo);
        myStorage.setItem('zip', zip);
        myStorage.setItem('city', city);
        myStorage.setItem('state', state);
        myStorage.setItem('country', country);
        myStorage.setItem('phone', phone);
        myStorage.setItem('card', card);
        myStorage.setItem('month', month);
        myStorage.setItem('year', year);
        myStorage.setItem('cvv', cvv);

    }

    document.getElementById('reload').onclick = function() {
        document.getElementById('fname').value = myStorage.getItem('fname');
        document.getElementById('lname').value = myStorage.getItem('lname');
        document.getElementById('Addy1').value = myStorage.getItem('addressone');
        document.getElementById('Addy2').value = myStorage.getItem('addresstwo');
        document.getElementById('zip').value = myStorage.getItem('zip');
        document.getElementById('city').value = myStorage.getItem('city');
        document.getElementById('state').value = myStorage.getItem('state');
        document.getElementById('country').value = myStorage.getItem('country');
        document.getElementById('phone').value = myStorage.getItem('phone');
        document.getElementById('card').value = myStorage.getItem('card');
        document.getElementById('month').value = myStorage.getItem('month');
        document.getElementById('year').value = myStorage.getItem('year');
        document.getElementById('cvv').value = myStorage.getItem('cvv');
    }


}