
let title = document.getElementsByClassName('card-title');
let cardText = document.getElementsByClassName('card-text');
let items = [];
window.addEventListener('load',()=>{
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = ()=>{
        var responseJSON = JSON.parse(xhrRequest.response);
        items = responseJSON;
        console.log(items);
        for(let i = 0;i<title.length;i++){
            title[i].innerText = items[i].title;
            cardText[i].innerHTML = items[i].body;
        }
    }

    xhrRequest.onerror = function(){
        console.log("Request Failed");
    }
    xhrRequest.open('get','https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11',true);
    xhrRequest.send();
});