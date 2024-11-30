let btn1 = document.querySelectorAll("btn1");
// for the history
let outputText = "";

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

function setFlags(){
    let selectLang1 = document.getElementById("select1").value;
    let selectLang2 = document.getElementById("select2").value;

    let flag1 = countries[selectLang1].substring(0,2)
    let lowerCaseFlag1 = flag1.toLocaleLowerCase(flag1)    
    console.log(lowerCaseFlag1);
    

    
    let flag2 = countries[selectLang2].substring(0,2)
    let lowerCaseFlag2 = flag2.toLocaleLowerCase(flag2)    
    console.log(lowerCaseFlag2);
    

    document.getElementById("setFlag1").innerHTML=`<img src="https://flagcdn.com/w40/${lowerCaseFlag1}.png" alt="English" class="flag-icon me-2">`
    document.getElementById("setFlag2").innerHTML=`<img src="https://flagcdn.com/w40/${lowerCaseFlag2}.png" alt="English" class="flag-icon me-2">`
}

function convert(){
    let inputText = document.getElementById("inputText").value;
    let select1= document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    console.log(inputText);       

    setSelectLanguage(); 
    setFlags();

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
        outputText=output;       
    })
    .catch((error) => console.error(error));   

    setTimeout(() => {
        history();
    }, 1000);
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

let historyArr = [];
function history(){
    let inputText = document.getElementById("inputText").value;    
    let inputHistory =  `<ul>
                        <li>Input Text Is :  ${inputText}</li>
                        <li>Translated Text Is :  ${outputText}</li>
                        </ul>`
    
        
    historyArr.push(inputHistory);
    console.log(historyArr);    
    
}

function historyBtn(){   
    Swal.fire({
        title: historyArr,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}






