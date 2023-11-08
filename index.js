
const Quote = document.getElementById("quote");

const Author =document.getElementById("author"); 

const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    Quote.innerHTML = data.content;
    Author.innerHTML = data.author;
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ Quote.innerHTML + "-----by" +Author.innerHTML,"Tweet Window","width=600 ,height=300");
}

