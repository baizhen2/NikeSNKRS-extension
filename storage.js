var myStorage = window.localStorage;

window.onload = function() {
    document.getElementById('button').onclick = function() {
        var account = document.getElementById('Account').value;
        var password = document.getElementById('Password').value;
        var proxy = document.getElementById('Proxy').value;

        myStorage.setItem('account', account);
        myStorage.setItem('password', password);
        myStorage.setItem('proxy', proxy);

        
    }

    document.getElementById('Load').onclick = function() {
        document.getElementById('Account').value = myStorage.getItem('account');
        document.getElementById('Password').value = myStorage.getItem('password');
        document.getElementById('Proxy').value = myStorage.getItem('proxy');
    }


}