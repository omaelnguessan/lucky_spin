function shuffle(array) {
  var currentIndex = array.length;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function spin() {
  //wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let selectedItem = "";

  let Iphone5 = shuffle([1890, 2250, 2610]);
  let Iphone6 = shuffle([1850, 2210, 2570]);
  let Zonk = shuffle([1770, 2130, 2490]);
  let Iphone10 = shuffle([1810, 2170, 2530]);
  let Iphone14 = shuffle([1750, 2110, 2470]);
  let SmartTv = shuffle([1630, 1990, 2350]);
  let Rog = shuffle([1570, 1930, 2290]);

  let results = shuffle([
    Iphone5[0],
    Iphone6[0],
    Zonk[0],
    Iphone10[0],
    Iphone14[0],
    SmartTv[0],
    Rog[0],
  ]);

  if (Iphone5.includes(results[0])) selectedItem = "Iphone 5";
  if (Zonk.includes(results[0])) selectedItem = "💣";
  if (Iphone10.includes(results[0])) selectedItem = "Iphone 10";
  if (Iphone14.includes(results[0])) selectedItem = "Iphone 14";
  if (SmartTv.includes(results[0])) selectedItem = "Smart Tv";
  if (Rog.includes(results[0])) selectedItem = "Asus rog";

  box.style.setProperty("Transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animation");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  setTimeout(function () {
    applaudissement.play();
    Swal.fire({
      title: "Feliciation!",
      html: "Vous gagnez ce lot <strong>" + selectedItem + "</strong>",
      imageUrl: "./assets/img/congrat.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }, 5500);

  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
