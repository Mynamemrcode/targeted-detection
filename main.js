status = "";
status = "";
object = [];
function preload() {

}


function setup() {
canvas = createCanvas(700,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function start() {
    Objectdt = ml5.objectDetector('cocossd', loads);
    document.getElementById("stat").innerHTML = "Detecting Object...";
   value = document.getElementById("thing1").value;
}
function loads() {
    console.log("Loaded");
   
}


function gotresult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(video, 0, 0, 700, 500);
    if(status != "") {
        
        for(i=0; i < object.length; i++) {
            fill("Blue");
            text(object[i].label, object[i].x, object[i].y);
            noFill();
            stroke("Blue");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
        if(objects.length == value) {
            document.getElementById("stat").innerHTML = "Detected Object";
            
            Objectdt.detect(gotresult);
        }
        else {
            document.getElementById("stat").innerHTML = "The Program has Not found the object"
        }
    }
    
    }