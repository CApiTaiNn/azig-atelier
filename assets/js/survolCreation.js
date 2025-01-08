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

let av_ap = document.getElementById('av_ap');
av_ap.addEventListener('mouseover', (event) => hoverImage(av_ap, 'assets/images/creations/colliers/avant_apres/pendentifAvant.jpg', 'assets/images/creations/colliers/avant_apres/pendentifApres.jpg', event));
av_ap.addEventListener('mouseleave', (event) => hoverImage(av_ap, 'assets/images/creations/colliers/avant_apres/pendentifAvant.jpg', 'assets/images/creations/colliers/avant_apres/pendentifApres.jpg', event));