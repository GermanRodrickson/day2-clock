const hour = document.getElementById("hour"); 
// document.getElementById("p2").style.color = "blue";

setTimeout( () => { 
  hour.style.transform = "rotateZ(2deg)";
 }, 1000);

function timeout() {
  setTimeout(() => {
    hour.style.transform = "rotateZ(2deg)";
    timeout();
  }, 1000);
}