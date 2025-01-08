const bottom = document.getElementById("bottom");
const dropdown = document.getElementById("dropdown");
const del = document.getElementById("del");
const all = document.getElementById("all");
const Burga = document.getElementById("Burga"); 
const Pizza = document.getElementById("Pizza")
const Pasta = document.getElementById("Pasta");
const Fries = document.getElementById("Fries")

const one = document.getElementById("one");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const change = document.getElementById("change");
const changes = document.getElementById("changes");
const servicon = document.getElementById("servicon");
const ss = document.getElementById("ss");
const servibox = document.getElementById("servibox");
const fast =document.getElementById("fast")
const fasts =document.getElementById("fasts")

servibox.onclick = function(){
servibox.style.animationPlayState = "running";
}
const food1 = document.getElementById("food1");
const food2 = document.getElementById("food2");


servicon.onmouseover = function(){
servicon.style.display = "none";
ss.style.display = "block";
}

servicon.onmouseout = function(){
ss.style.display = "none";
servicon.style.display = "block";
}




fast.onmouseover = function(){
fast.style.display = "none";
fasts.style.display = "block";  
}


fast.onmouseout = function(){
fasts.style.display = "none";
fast.style.display = "block";
}



food1.onmouseover = function(){
food1.style.display = "none";
food2.style.display = "block";  
}

food2.onmouseout = function(){
food2.style.display = "none";
food1.style.display = "block";
}

bottom.onmouseover = function(){
dropdown.style.display = "block";
dropdown.style.margin = "20px 400px";
console.log(30);
}

del.onmouseout = function(){
dropdown.style.display = "block";
}

Burga.onclick = function(){
one.style.display = "none";
two.style.display = "block";
three.style.display = "none";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";
seven.style.display = "block";
eight.style.display = "block";
nine.style.display = "none";
}
Pizza.onclick = function(){
one.style.display = "block";
two.style.display = "none";
three.style.display = "block";
eight.style.display = "none";
seven.style.display = "none";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";
nine.style.display = "block";
}

Pasta.onclick = function(){
one.style.display = "none";
two.style.display = "none";
three.style.display = "none";
eight.style.display = "none";
seven.style.display = "none";
four.style.display = "block";
five.style.display = "none";
six.style.display = "none";
nine.style.display = "block";
}

Fries.onclick = function(){
one.style.display = "none";
two.style.display = "none";
three.style.display = "none";
eight.style.display = "none";
seven.style.display = "none";
four.style.display = "none";
five.style.display = "block";
six.style.display = "none";
nine.style.display = "none";
}

all.onclick = function(){
one.style.display = "block";
two.style.display = "block";
three.style.display = "block";
eight.style.display = "block";
seven.style.display = "block";
four.style.display = "block";
five.style.display = "block";
six.style.display = "block";
nine.style.display = "block";
}




