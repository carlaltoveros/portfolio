// Expands the image when clicked on
function expandImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgText");
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandedImg.parentElement.style.display="block";
}