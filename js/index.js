function loadFeaturedProjects() {
  const container = document.getElementById("featured-grid");
  if (!container) return;
  const featured = projectsData.slice(0, 3);
  container.innerHTML = featured.map(project => `
    <div class="project-card reveal">
      <div class="project-img" style="background: ${project.imageColor}; height:200px; border-radius:16px; display:flex; align-items:center; justify-content:center;">
        <span style="font-weight:bold;">${project.title}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.type}</p>
    </div>
  `).join('');
  initScrollReveal();
}


function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProjects();
    initScrollReveal();
  });
} else {
  loadFeaturedProjects();
  initScrollReveal();
}