document.getElementById("share-btn").addEventListener("click", myFunction);

function myFunction() {
    var popupDisplay = document.getElementById("share-popup");
    if (popupDisplay.style.display == "flex") {
        document.getElementById("share-popup").style.display = "";
    } else {
        popupDisplay.style.display = "flex";
    }
} 