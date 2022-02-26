const images = [
    "0.jpeg", "1.jpeg", "2.jpeg"
]
const imagefile = images[Math.round(Math.random(1) * (images.length - 2))+1];
const bgImage = document.createElement("img");
bgImage.src = `img/${imagefile}`;
console.log(bgImage)
document.body.appendChild(bgImage);