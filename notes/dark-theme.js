(function() {
  try {
    localStorage.setItem('ls-theme-mode', '"dark"');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('white-theme');
  } catch(e) {}
})();
