const url="https://hindi-jokes-api.onrender.com/jokes/2?api_key=6453995f52aa0b426377dec65462";
const para=document.querySelector("#containerPara")
const paraone=document.querySelector("#containerPara1")
const btn= document.querySelector("#next")
const headbtn=document.querySelector("#headbtn")
const head=document.querySelector("#divhead")
const body=document.querySelector("body")

async function fetchdata(){
    const response= await fetch(url);
    const data= await response.json();
    para.innerHTML=data.data[0].jokeContent;
    paraone.innerHTML=data.data[1].jokeContent;
    
console.log(data.data[0].jokeContent , paraone.innerHTML=data.data[1].jokeContent)
     speak(p);
        speak(pone);


function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "hi-IN";  // Set language to Hindi
    speech.text = text;
    window.speechSynthesis.speak(speech);
}
    } catch (error) {
        console.error("Error fetching data:", error);
    }

if(para===""&&paraone===""){
    alert("please Check Your Internet Connection")
}
else{
    
}

}

headbtn.addEventListener("click",function(){
   
   body.removeChild(head)
    
    speak(p);
    speak(pone);
  
   
})

window.onload = function() {
   fetchdata();
}
btn.addEventListener("click",function(){
    fetchdata()
    
})
