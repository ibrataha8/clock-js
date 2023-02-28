let ti = document.querySelector("#ti");
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
  time = hours + ":" + minutes + ":" + seconds
  ti.innerHTML = time;
}, 10);
