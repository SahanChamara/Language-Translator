let btn1 = document.querySelectorAll("btn1");

const selectTag = document.querySelectorAll("select");
selectTag.forEach((tag,id) => {
    for(const countryCode in countries ){
        let selected;
        if(id == 0 && countryCode == "en-GB"){
            selected = "selected";
        }else if(id == 1 && countryCode == "si-LK"){
            selected = "selected";
        }
        let option = `<option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`;       
        tag.insertAdjacentHTML("beforeend",option);  
    }    
})

function setSelectLanguage(){
    let selectLang1 = document.getElementById("select1").value;
    let selectLang2 = document.getElementById("select2").value;

    document.getElementById("setSelectedLang1").innerHTML = countries[selectLang1];
    document.getElementById("setSelectedLang2").innerHTML = countries[selectLang2];
}

function convert(){
    let inputText = document.getElementById("inputText").value;
    let select1= document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    console.log(inputText);       

    setSelectLanguage();

    const raw = "";

const requestOptions = {
  method: "POST",
  body: raw,
  redirect: "follow"
};

fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${select1}|${select2}`, requestOptions)
    .then(res => res.json())
    .then(data => {
        let output = data.responseData.translatedText;
        document.getElementById("setText").innerHTML=output;        
    })
    .catch((error) => console.error(error));   
}


function speech(){   
    let inputText = document.getElementById("inputText").value;
    try {
        let utr = new SpeechSynthesisUtterance(inputText);
        speechSynthesis.speak(utr);
    } catch (e) {
        console.error("Speech synthesis failed:", e);
    }
}
















