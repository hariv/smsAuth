(function(){
    var streaming=false,
    video=document.querySelector('videoStream'),
    canvas=document.querySelector('snapShot'),
    button=document.querySelector('takePhoto'),
    width=320,
    height=0;
    navigator.getMedia=(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia);
    navigator.getMedia({video: true,audio: false},function(stream){
	if(navigator.mozGetUserMedia)
	{
	    video.mozSrcObject=stream;
	}
	else
	{
	    var vendorURL=window.URL||window.webkitURL;
	    video.src=vendorURL.createObjectURL(stream);
	}
    },function(err){
	console.log(err);
    });
})();
