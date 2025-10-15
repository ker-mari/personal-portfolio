(function() {
  var xp = 0, mouseX = 0;
  var yp = 0, mouseY = 0;
  var xpDot = 0;
  var ypDot = 0;

  const cursorFollower = document.querySelector(".cursorFollower");
  const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

  if (!cursorFollower || !cursorFollowerDot) {
    console.warn('Cursor elements not found');
    return;
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  setInterval(function () {
    if (!cursorFollower) return;
    
    xp += (mouseX - xp) / 15;
    yp += (mouseY - yp) / 15;

    cursorFollower.style.left = xp + "px";
    cursorFollower.style.top = yp + "px";
  }, 20);

  setInterval(function () {
    if (!cursorFollowerDot) return;
    
    xpDot += (mouseX - xpDot) / 25;
    ypDot += (mouseY - ypDot) / 25;

    cursorFollowerDot.style.left = xpDot + "px";
    cursorFollowerDot.style.top = ypDot + "px";
  }, 20);
})();