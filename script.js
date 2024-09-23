const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => { 
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

window.onload = () => {
  const savedTheme = localStorage.getItem('theme'); 
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};
