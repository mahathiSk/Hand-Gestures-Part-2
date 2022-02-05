prediction_1 ="";
prediction_2 ="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera =document.getElementById("camera");

Webcam.attach('#camera');

function screenshot() {
    Webcam.snap(function(data_url) {
document.getElementById("result").innerHTML ='<img id="captured" src="'+data_url+'">';
    });
}

console.log('ml5 is loaded',ml5.version);

classifer =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SImxq1TL1/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}