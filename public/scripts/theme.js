/**
 * Toggles the 'dark' class on the body element, saves the theme preference to localStorage,
 * and updates the theme toggle button icon.
 */
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

/**
 * Updates the text content of the theme toggle button based on whether the body has the 'dark' class.
 */
function updateButtonIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  const body = document.body;
  if (btn) {
      if(body.classList.contains('dark')){
        btn.textContent = "☀️";
      } else {
        btn.textContent = "🌙";
      }
  }
}

// This block runs when the script is executed in a browser environment (client-side).
// It checks for a saved theme preference in localStorage and applies it if found.
// This ensures the theme persists across page loads.
if (typeof window !== "undefined") {
  const saved = localStorage.getItem('theme');
  const body = document.body;
  if (saved) {
    if (saved === 'dark') {
      body.classList.add('dark');
    } 
    updateButtonIcon();
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark');
    }
  }
  
}

// This event listener waits for the entire HTML document to be fully loaded and parsed.
// It then finds the theme toggle button, updates its initial icon based on the current theme,
// and adds a click event listener to call the toggleTheme function when clicked.
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    if(document.body.classList.contains('dark')){
      btn.textContent = "☀️"; }
    btn.addEventListener('click', toggleTheme);
    updateButtonIcon();
  }

});
