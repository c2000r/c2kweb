function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
  updateButtonIcon();

}

function updateButtonIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  const body = document.body;
  if (btn) {
      if(body.classList.contains('dark')){
        btn.textContent = "☀️";
      } else {
        btn.textContent = "🌙";
        // btn.textContent = "🌙";
      }
  }
}

if (typeof window !== "undefined") {
  const saved = localStorage.getItem('theme');
  const body = document.body;
  if (saved) {
    if (saved === 'dark') {
      body.classList.add('dark');
    } 
    updateButtonIcon();
  }
  
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    if(document.body.classList.contains('dark')){
      btn.textContent = "☀️"; }
    btn.addEventListener('click', toggleTheme);
    updateButtonIcon();
  }

});
