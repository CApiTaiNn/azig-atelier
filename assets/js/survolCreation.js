function hoverImage(name, nPath, ancPath, event) {
    if (event.type === "mouseover") {
        name.src = nPath;
    } else if (event.type === "mouseleave") {
        name.src = ancPath;
    }
}

let imageOrange = document.getElementById('bagueOrange');
imageOrange.addEventListener('mouseover', (event) => hoverImage(imageOrange, 'assets/images/creations/bagues/bagueArgentOrangeDos.jpg', 'assets/images/creations/bagues/bagueArgentOrangeFace.jpg', event));
imageOrange.addEventListener('mouseleave', (event) => hoverImage(imageOrange, 'assets/images/creations/bagues/bagueArgentOrangeDos.jpg', 'assets/images/creations/bagues/bagueArgentOrangeFace.jpg', event));
