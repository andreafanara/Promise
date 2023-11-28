"use strict"
/* prendiamo un numero casuale da 0 a 10 e se il numero è maggiore di quattro la promise sarà risolta altrimenti sarà rigettata */
$(document).ready(function() {
    let request = new Promise(function (resolve, reject) {
        setTimeout(function(){
            let num = Math.round(10 * Math.random());
            if (num > 4) {
                resolve("ok ce l'abbiamo fatta, il numero era " + num);
            } else {
                reject('chiamata fallita il numero era ' + num)
            }
            }, 5000);
    });
    request.then(function(res) {
        document.getElementsByTagName('body')[0].innerHTML = res;
    });
    alert("Sono dopo il then");
    request.catch(function(err) {
        document.getElementsByTagName('body')[0].innerHTML = err;
    })
    alert("Sono dopo il catch");
});