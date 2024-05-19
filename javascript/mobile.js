
const videos = ["./../img/home-img/mob-pic/mob-vid1.mp4"," ./../img/home-img/mob-pic/mob-vid2.mp4","./../img/home-img/mob-pic/mob-vid3.mp4"]         //array of videos
let currentIndex=0;
function changeVideo(){

    const videoElement = document.getElementById("header-video");
    currentIndex =(currentIndex + 1 ) % videos.length;
    console.log(currentIndex);
    videoElement.src = videos[currentIndex];
    
}

    

