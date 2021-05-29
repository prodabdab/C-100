var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("input1").innerHTML="";

    recognition.start();

}

recognition.onresult = function run (event){

    console.log(event);

    var finalresult = event.results[0][0].transcript;

    console.log(finalresult);

    document.getElementById("input1").innerHTML = finalresult;
  

  if (finalresult == "take my selfie"){
    speak();
  }
}

function speak() {
    var synth = window.speechSynthesis;
    console.log(synth);
    speak_data = "Taking selfie in 5 seconds 5 4 3 2 1";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    Webcam.attach('camera');

    setTimeout(function(){
      take_snapshot();
      save();
    
    },5000); 

    

}


Webcam.set({
    width : 400,
    height:300,
    image_format:'png',
    png_quality: 96.9912313123123123123232131321312 
});
camera = document.getElementById('camera');

 function take_snapshot() {
 Webcam.snap(function (data_url){
   document.getElementById('output_of_pic').innerHTML = "<img id='dss' src="+ data_url +">" ; 
 });
 }

 function save() {
   link= document.getElementById('link');
   image = document.getElementById('dss').src;
   link.href = image;
   link.click();
 }