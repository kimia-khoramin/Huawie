const menuBtn = document.getElementById('menu-toggle');

menuBtn.onclick = showHeader;

function showHeader() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const menuIcon = document.querySelector('#menu-toggle i');
  overlay.classList.toggle('toggleOverlay');
  menu.classList.toggle('show');
  menuIcon.classList.toggle('up');
}
