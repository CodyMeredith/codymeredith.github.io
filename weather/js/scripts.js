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

function showBanner() {
    const d = new Date().getDay();
    if (d === 5) {
        document.getElementById("pancakeBanner").style.display = "block"
    }
    else if (d !== 5) {
        document.getElementById("pancakeBanner").style.display = "none"
    }
}