/*________________________Birds________________________*/
VANTA.BIRDS({
  el: "#vantaBirds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 0.1,
  minWidth: 0.1,
  scale: 1.0,
  scaleMobile: 1.0,
  quantity: 5.0,
});
/*_____________________________________________________*/

/*________________________Happy________________________*/

var hotbod = document.querySelector("body");

function doStuff() {
  hotbod.className += " animate";
}

window.onload = function () {
  doStuff();
};

/*_____________________________________________________*/
