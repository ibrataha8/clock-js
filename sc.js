let ti = document.querySelector("#ti");
function twoDigits(digits){
  return digits.toString().padStart(2,'0');
}
setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (seconds==60) {
    seconds=0
    minutes++
  }
  if (minutes==60) {
    minutes=0
    hours++
  }
  if (hours==24) {
    hours=00
  }
  time = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  ti.innerHTML = time;
}, 10);
