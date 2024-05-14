function custName(){
    const nameElement = document .getElementById("header-heading")
    const name =prompt("Please Enter Your Name To Log Into Our Site")
    nameElement.innerText=`Hello ${name} , Welcome To Shri Sadguru Mobile Shop Website.`;
    
}    
function imageChange (){
    const imageElement =document.getElementById("offer2-cards")
   const min = 1;
   const max = 7;
   const mathElement = Math.round (Math.random() * (max-min) + (min));

   console.log(mathElement)
   switch(mathElement){
    case(1) :
    imageElement.src = "./img/home-img/home-img3.jpg";
    break;

    case(2) :
    imageElement.src = "./img/home-img/home-img2.jpg";
    break;
        
    case(3) :
    imageElement.src = "./img/home-img/home-img4.jpg";
    break;
        
    case(4) :
    imageElement.src = "./img/home-img/home-img5.jpg";
    break;
        
    case(5) :
    imageElement.src = "./img/home-img/home-img6.jpg";
    break;
        
    case(6) :
    imageElement.src = "./img/home-img/home-img7.jpg";
    break;

    case(7) :
    imageElement.src = "./img/home-img/home-img8.jpg";
    break;
        
   }
}

