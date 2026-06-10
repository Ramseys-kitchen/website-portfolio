document.addEventListener("DOMContentLoaded", function() {

  var grid = document.getElementById("work-grid");
  var lightbox = document.getElementById("lightbox");
  var lbClose = document.getElementById("lightbox-close");

 
  for (var i = 0; i < projectsData.length; i++) {

    var card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-category", projectsData[i].category);

    
    var thumbHTML = "";
    if (projectsData[i].imageUrl) {
      thumbHTML = '<img src="' + projectsData[i].imageUrl + '" alt="' + projectsData[i].title + '" style="width:100%;height:100%;object-fit:cover;">';
    } else {
      thumbHTML = '<span>' + projectsData[i].title.charAt(0) + '</span>';
    }

    card.innerHTML =
      '<div class="project-img" style="background:' + projectsData[i].imageColor + '">' +
        thumbHTML +
      '</div>' +
      '<h3>' + projectsData[i].title + '</h3>' +
      '<p>' + projectsData[i].type + '</p>';

    
    card.addEventListener("click", (function(project) {
      return function() {
        openLightbox(project);
      };
    })(projectsData[i]));

    grid.appendChild(card);
  }

  
  var filterBtns = document.querySelectorAll(".filter-btn");

  for (var j = 0; j < filterBtns.length; j++) {
    filterBtns[j].addEventListener("click", function() {

      for (var k = 0; k < filterBtns.length; k++) {
        filterBtns[k].classList.remove("active");
      }
      this.classList.add("active");

      var filter = this.getAttribute("data-filter");
      var cards = grid.querySelectorAll(".project-card");

      for (var m = 0; m < cards.length; m++) {
        if (filter === "all" || cards[m].getAttribute("data-category") === filter) {
          cards[m].style.display = "block";
        } else {
          cards[m].style.display = "none";
        }
      }
    });
  }

  
  function openLightbox(project) {
    var lbImage = document.getElementById("lb-image");

    if (project.imageUrl) {
      lbImage.innerHTML = '<img src="' + project.imageUrl + '" alt="' + project.title + '" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">';
    } else {
      lbImage.innerHTML = "";
      lbImage.style.background = project.imageColor;
    }

    document.getElementById("lb-type").textContent = project.type;
    document.getElementById("lb-title").textContent = project.title;
    document.getElementById("lb-desc").textContent = project.description;
    document.getElementById("lb-tools").textContent = project.tools || "See description";
    document.getElementById("lb-year").textContent = project.year || "2024";

    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  
  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

});