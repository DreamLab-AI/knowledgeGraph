(function() {
  try {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-color', 'logseq');
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('white-theme', 'light-theme');
    localStorage.setItem('ls-theme-mode', '"dark"');
    localStorage.setItem('ls-theme-color', '"logseq"');
  } catch(e) {}
})();
