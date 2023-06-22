// referencing needed DOMs
let randomizeButton = document.getElementById("randomize");
let submitButton = document.getElementById("poster-form");
let poster = document.getElementById("poster-image");
let title = document.getElementById("poster-title");
let quote = document.getElementById("poster-quote");
//array of img objects
const posters = [
  {
    image:
      "https://64.media.tumblr.com/51a55b770d8c0adcac30cbb8e9ca8d84/tumblr_pigrjbHei51w0po92_1280.jpg", //shanks
    title: "A wise man once said:",
    quote:
      "The courageous moments that you created... have changed the future of the world tremendously — for better or worse.",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/vinland-saga-season-2-thorfinn-646e3bd9d0a7b.png?crop=0.563xw:1.00xh;0.220xw,0&resize=1200:*", //throfinn
    title: "A cool guy once said:",
    quote:
      "Like will challenge you to do things...sometimes, you just have to let it go!",
  },
  {
    image: "https://th.bing.com/th/id/OIP.rO_5-nc29IverzXEdecDXwHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7", //Trunks
    title: "A funny guy once said:",
    quote: "As long as a man has money, he'll be popular!",
  },
  {
    image:
      "https://i.pinimg.com/originals/8a/75/66/8a75665d971149adc81cfaa3d3c83a5d.jpg", //naruto
    title: "A wise man once said:",
    quote:
      "If you dont like your destiny, dont accept it. Instead have the courage to change it the way you want to be.",
  },
  {
    image:
      "https://static.wikia.nocookie.net/a10c99d3-5908-4636-b015-4ec5a90114bb/scale-to-width/755", //Rengoku
    title: "A wise man once said:",
    quote:
      "No single thing is perfect by itself. Thats why were born to attract other things to make up for what we lack.",
  },
  {
    //jariya
    image:
      "https://i.pinimg.com/736x/ad/ca/54/adca544a09c308ccb5d8c1ff0872da1d.jpg",
    title: "A funny guy once said:",
    quote:
      "Any man that doesn't learn to laugh at rejection...is worthless as a man.",
  },
];

// Event listener for randomize button
// everytime button is clicked, callback function is then called
randomizeButton.addEventListener("click", (cb) => {
  poster.src = posters[Math.floor(Math.random() * posters.length)].image; //generating random index within range of poster array length
  title.innerText = posters[Math.floor(Math.random() * posters.length)].title;
  quote.innerText = posters[Math.floor(Math.random() * posters.length)].quote;
});

// Event listener for submit button
submitButton.addEventListener("submit", (e) => {
  e.preventDefault(); // website does not refresh after clicking submit button

  title.innerText = document.getElementById("poster-form-author").value;
  quote.innerText = document.getElementById("poster-form-quote").value;
});