var button = document.getElementById("button");
var image = document.getElementById("img1");
var numclicks = 0;
button.addEventListener("click",function(){
    if (numclicks < 2){
        var randomnum = Math.floor(Math.random() * 3);
        if (randomnum == 0) {
            image.setAttribute("src","55098982592_17a11a6e82_o.jpg");
        } else if (randomnum == 1) {
            image.setAttribute("src","IMG_4418.png");
        } else if (randomnum == 2) {
            image.setAttribute("src","IMG_4423.png");
        }
        numclicks++;
    } else {
        window.location.href = "http://youtube.com/watch?v=xMHJGd3wwZk";
    }
})