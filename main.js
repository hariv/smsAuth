function snap(w,h)
{
    console.log("Called Snap");
    var live=document.getElementById('webcam');
    var snapShot=document.getElementById('snapShot');
    snapShot.width=w;
    snapShot.height=h;
    c=snapShot.getContext("2d");
    c.drawImage(live,0,0,w,h);
    var comp=ccv.detect_objects({"canvas" : (ccv.pre(snapShot)),"cascade" : cascade,"interval" : 5,"min_neighbors" : 1 });
    console.log(comp);
}
function onSuccess(stream) 
{
    var video = document.getElementById('webcam');
    var videoSource;
    var ratio, w,h;
    if(window.webkitURL)
	videoSource=window.webkitURL.createObjectURL(stream);
    else
	videoSource=stream;
    video.autoplay=true;
    video.src=videoSource;
    video.addEventListener('loadedmetadata',function(){
	console.log("Loaded Metadata");
	ratio=video.videoWidth/video.videoHeight;
	w=video.videoWidth-100;
	h=parseInt(w/ratio,10);
	snap(w,h);
    },false);
}
function onError(err) 
{
    console.log(err);
    alert('There has been a problem retrieving the streams - did you allow access?');
}
window.onload=function()
{
    var video=document.getElementById('videoStream'),
    canvas=document.getElementById('snapShot');
    navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
    if (navigator.getUserMedia)
    {
	navigator.getUserMedia({
	    video: true,
	    audio: false
	},onSuccess,onError);
    }
    else 
	alert('getUserMedia is not supported in this browser.');
}
