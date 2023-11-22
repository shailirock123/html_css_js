const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                }else{
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        }else{
            speechBtn.innerText = "Convert To Speech";
        }
    }
});

const person1 = {name:'akhilesh'}
const person2 = {name:'akhilesh1'}
const person3 = person2;

person3.name = 'shailendra'
// alert(person3.name)
// alert(person1.name)
// alert(person1.name)



let arr = [24, 35, 67, 45, 89, 98, 56]

let largest = arr[0];
let second = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
     second=largest;
    largest = arr[i];
   
  }
//   else if(arr[i] > second && arr[i] !==largest){
//    second = arr[i];
  
//   }
  
}

// alert(largest)



let str = prompt();
let reversestr = str.split('');
let rversed = reversestr.reverse().join('')
if(str === rversed){
    alert('string is Palindrome')
}
else{
    alert('string is not Palindrome')
}

const crypto = require('crypto');
const algo = 'aes-256-cbc';
const iv = crypto.randomBytes(16);
const msg = 'this is a bag';
const key = crypto.randomBytes(32);
const cipher = crypto.createCipheriv(algo,key,iv);
let enc = cipher.update(msg,'utf-8','hex')
enc+= cipher.final('hex')
console.log(enc)




