//Person1
var randomNumber1=Math.floor(Math.random()*6+1);  //Random No Between 1 & 6
var randomImg1 = "dice"+randomNumber1+".png"; //dice1
var randomImgSource1="./images/"+randomImg1;  // "./images/dice6.png

//Person2
var randomNumber2=Math.floor(Math.random()*6+1);  //Random No Between 1 & 6
var randomImg2 = "dice"+randomNumber2+".png"; //dice2
var randomImgSource2="./images/"+randomImg2;

//Fetching both Images
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

//Updating Both Images
img1.setAttribute("src",randomImgSource1);  //setting img1
img2.setAttribute("src",randomImgSource2);  //setting img2


//Updating Result
if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player 1 Wins ! 😎"
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins ! 😎"
else
    document.querySelector("h1").innerHTML="Draw 👻"