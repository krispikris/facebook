let settingsmenu = document.querySelector('.settings-menu');
let darkButton = document.getElementById('dark-btn');

const settingsMenuToggle = () => {
  settingsmenu.classList.toggle('settings-menu-height');
};

darkButton.onclick = () => {
  darkButton.classList.toggle('dark-btn-on');
};
