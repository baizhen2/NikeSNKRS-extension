window.onload = function() {
    document.getElementById('button').onclick = function() {
        var account = document.getElementById('Account').value;
        var password = document.getElementById('Password').value;
        var proxy = document.getElementById('Proxy').value;
        var split = proxy.split(":");
        var ip = split[0];
        var port = split[1]; //this is a string, needs to become and int during the proxy process
        var username;
        var proxyPassword;

        if (split[3] == undefined) {
            username = "";
            proxyPassword = "";
        }

        localStorage.setItem('account', account);
        localStorage.setItem('password', password);
        localStorage.setItem('proxy', proxy); //this is only used when user wants to reload

        localStorage.setItem('ip', ip);
        localStorage.setItem('port', port);
        localStorage.setItem('username', username);
        localStorage.setItem('proxyPassword', proxyPassword);

    }

    document.getElementById('Load').onclick = function() {
        document.getElementById('Account').value = localStorage.getItem('account');
        document.getElementById('Password').value = localStorage.getItem('password');
        document.getElementById('Proxy').value = localStorage.getItem('proxy');
    }


}