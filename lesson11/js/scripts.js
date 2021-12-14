function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById("current_year").innerHTML = new Date().getFullYear()

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        
    };
    document.getElementById("last_updated").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with code or your browser does not support Locale");
}


const d = new Date().getDay();
if (d === 5) {
    document.getElementById("pancakeBanner").style.display = "block"
}
else if (d !== 5) {
    document.getElementById("pancakeBanner").style.display = "none"
}


var header = document.getElementById("nav");
var btns = header.getElementsByClassName("navList");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += "active";
  });
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}