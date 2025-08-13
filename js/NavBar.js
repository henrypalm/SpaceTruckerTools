// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  // Inject CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .nav-tabs {
      display: flex;
      gap: 10px;
      background-color: #222;
      padding: 10px;
      border-bottom: 2px solid #444;
      margin-bottom: 20px;
      justify-content: center;
    }
    .nav-tabs a {
      color: #ccc;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 5px;
      background-color: #333;
      transition: background-color 0.3s;
    }
    .nav-tabs a:hover {
      background-color: #555;
      color: white;
    }
    .nav-tabs a.active {
      background-color: #2d89ff;
      color: white;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // Inject navbar HTML
  const nav = document.createElement('div');
  nav.className = 'nav-tabs';
  nav.innerHTML = `
    <a href="index.html">Space Trucker Tools</a>
    <a href="Yield2Sell.html">Yield 2 Sell</a>
    <a href="CargoManifestWriter.html">Cargo Manifest</a>
    <a href="ProfitSpliter.html">Profit Splitter</a>
    <a href="Profile.html">Profile</a>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // Highlight the active tab
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-tabs a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
    }
  });
});
