var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.getElementById('text-input');
var resultoutput = document.getElementById('output');
console.log(btnTranslate);

function handleClick() {
        console.log("clicked");
        var userinput = textInput.value
       resultoutput.innerHTML = userinput;
}
  
btnTranslate.addEventListener("click" ,handleClick)

function handleClick(){
        var inputText = textInput.value;
        fetch("http://api.funtranslations.com/translate/navi.json")
}