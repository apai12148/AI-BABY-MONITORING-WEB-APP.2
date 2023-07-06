objects = ""
song = ""
function preload()
{
    song = loadSound("music.mp3");
}

function draw()
{
    for(i = 0; i <objects.length; i++){
        if(objects[i].label == "person")
{
    document.getElementById("baby_found").innerHTML = "Baby Detected";
    song.stop()
} else 
{
    document.getElementById("baby_found").innerHTML = "Baby Not Detected";
    song.play()
}
}

if(objects[i].length < 0){
    document.getElementById("baby_found").innerHTML = "Baby Not Detected";
    song.play()
}
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}