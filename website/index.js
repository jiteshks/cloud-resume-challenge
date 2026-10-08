const counter=document.querySelector(".counter-number");
async function updateCounter()
{
    let response = await fetch("https://aeor3cof4ymqtnfwfman3va2ji0xzgkt.lambda-url.ap-southeast-2.on.aws/") ;
    let data = await response.json() ;
    counter.innerHTML=data.views ;


}

updateCounter() ;