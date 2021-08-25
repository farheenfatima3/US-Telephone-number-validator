const inputNum=document.querySelector("#inputN")
const checkButton=document.querySelector("#btn")
const validation=document.querySelector("#valid")


checkButton.addEventListener("click", function(){
    
    let inpInt=inputNum.value
   
    let regex=/^(1|1\s|)?(\((\d{3})\)|\d{3})(\s|\-)?(\d{3})(\s|\-)?(\d{4})$/
    if(regex.test(inpInt)){
        validation.innerText="Verified!"
        validation.style.color="green"
    }else{
        validation.innerText="Invalid phone number."
        validation.style.color="red"
    }
    
})  

