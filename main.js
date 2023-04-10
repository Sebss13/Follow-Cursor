var eyeBall = document.querySelector('#eyeBall');

document.onmousemove=(event)=>{
  var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    eyeBall.style.transition = ".1s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
}