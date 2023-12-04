let settingsmenu = document.querySelector('.settings-menu');
let darkButton = document.getElementById('dark-btn');

const settingsMenuToggle = () => {
  settingsmenu.classList.toggle('settings-menu-height');
};

darkButton.onclick = () => {
  darkButton.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');
};

if (localStorage.getItem('theme') == 'light') {
  darkButton.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') == 'light') {
  darkButton.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');
} else {
  localStorage.setItem('theme', 'light');
}

localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');
