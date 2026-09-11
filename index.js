greentext = document.getElementById("green")

greentext.onclick = function(){
    if (greentext.style.color == "green"){
        greentext.style.color = "red";
        greentext.innerHTML = "•Favorite Color, red"
    }
    else{
       greentext.style.color = "green"; 
       greentext.innerHTML = "•Favorite Color, red"
    }
}