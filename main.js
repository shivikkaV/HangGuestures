prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Pu8vaQJ2U/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = newSppeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name_2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "good")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> You're good </h6>";
        }
        if(results[0].label == "bad")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> That's Bad </h6>";
        }
        if(results[0].label == "peace out")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> Peace Out </h6>";
        }
        if(results[0].label == "stop")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> Stop </h6>";
        }
        if(results[0].label == "bang bang")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> Bang Bang </h6>";
        }
        if(results[0].label == "ok")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> Ok </h6>";
        }
        if(results[0].label == "power")
        {
            document.getElementById("update_gesture").innerHTML = "<h6> Power </h6>";
        }
        if(results[1].label == "good")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> You're good </h6>";
        }
        if(results[1].label == "bad")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> That's Bad </h6>";
        }
        if(results[1].label == "peace out")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> Peace Out </h6>";
        }
        if(results[1].label == "stop")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> Stop </h6>";
        }
        if(results[1].label == "bang bang")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> Bang Bang </h6>";
        }
        if(results[1].label == "ok")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> Ok </h6>";
        }
        if(results[1].label == "power")
        {
            document.getElementById("update_gesture2").innerHTML = "<h6> Power </h6>";
        }
    }
}