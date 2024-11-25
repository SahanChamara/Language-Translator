function convert(){
    let inputText = document.getElementById("inputText").value;

    console.log(inputText);
    
    const raw = "";

const requestOptions = {
  method: "POST",
  body: raw,
  redirect: "follow"
};

fetch(`https://api.mymemory.translated.net/get?q=${inputText}!&langpair=en-GB|si-LK`, requestOptions)
    .then(res => res.json())
    .then(data => {
        let output = data.responseData.translatedText;
        document.getElementById("setText").innerHTML=output;        
    })
}












