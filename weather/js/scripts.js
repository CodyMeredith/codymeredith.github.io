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
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    document.getElementById("last_updated").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with code or your browser does not support Locale");
}