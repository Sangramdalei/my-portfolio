function generatequote(){
    fetch('https://api.quotable.io/random')
    .then(response =>response.json())
    .then(data=>{
    const quote=`${data.content}-${data.author}`;
    document.getElementById('quote').innerText=quote;
});
    
}
generatequote();