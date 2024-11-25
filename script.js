let btn1 = document.querySelectorAll("btn1");
//let btn2 = document.getElementById("btn2");
// let dropdown1 = document.getElementById("dropdown1");
// let dropdown2 = document.getElementById("dropdown2");
// let dropdown3 = document.getElementById("dropdown3");
// let dropdown4 = document.getElementById("dropdown4");

// dropdown1.addEventListener("click", (e) => {
//     e.preventDefault();
//     btn1.value = dropdown1.textContent;
// });

// dropdown2.addEventListener("click" , (e) => {
//     e.preventDefault();
//     btn1.value = dropdown2.textContent;
// });

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
    .catch((error) => console.error(error));
}












