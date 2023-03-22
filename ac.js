Status = "";
ac_image = "";
object = [];

function preload(){
    ac_image = loadImage("data:image/jpeg;base64,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");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(ac_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    object = results;
}

function draw(){
    image(ac_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_obj").innerHTML = "From 4 object cocossd has detected " + object.length +  " object(s)"

            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%",object[i].x+ 5, object[i].y+ 15);
            noFill();
            stroke("#fc0303");
            rect(object[i].x + 15,  object[i].y, object[i].width, object[i].height);
        }
    }
}