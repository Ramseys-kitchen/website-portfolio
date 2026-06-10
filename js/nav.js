function createNav() {
  const pages = [
    { name: "Home", url: "index.html" },
    { name: "Work", url: "work.html" },
    { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" }
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <nav class="site-nav">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">Kgomotso Ramatapa</a>
        <button class="mobile-menu-btn" aria-label="Menu">☰</button>
        <ul class="nav-links">
          ${pages.map(page => `
            <li><a href="${page.url}" class="${currentPage === page.url ? 'active' : ''}">${page.name}</a></li>
          `).join('')}
          <li><button id="darkmode-toggle" aria-label="Dark mode">Mode</button></li>
        </ul>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  //mobile
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  
  const toggle = document.getElementById("darkmode-toggle");
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    root.classList.add("dark-mode");
  }
  if (toggle) {
    toggle.addEventListener("click", () => {
      root.classList.toggle("dark-mode");
      const newTheme = root.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });
  } 
}

createNav();