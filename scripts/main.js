document.addEventListener("DOMContentLoaded", function () {
  initContactForm();
  initProjectFilters();
  initDiaryFunctionality();
  initNavigation();
  initProjectModals();
  initAnimations();
});

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  const fields = {
    name: { 
      element: document.getElementById("name"), 
      error: document.getElementById("name-error") 
    },
    email: { 
      element: document.getElementById("email"), 
      error: document.getElementById("email-error") 
    },
    message: { 
      element: document.getElementById("message"), 
      error: document.getElementById("message-error") 
    }
  };

  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    if (field.element && field.error) {
      field.element.addEventListener('blur', () => validateField(fieldName, field));
      field.element.addEventListener('input', () => clearError(field));
    }
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    Object.keys(fields).forEach(fieldName => {
      if (fields[fieldName].element && fields[fieldName].error) {
        if (!validateField(fieldName, fields[fieldName])) {
          isValid = false;
        }
      }
    });

    if (isValid) {
      const formData = new FormData(contactForm);
      showSuccessMessage(`Сообщение отправлено! Имя: ${formData.get('name')}, Email: ${formData.get('email')}`);
      contactForm.reset();
      Object.keys(fields).forEach(fieldName => {
        if (fields[fieldName]) {
          clearError(fields[fieldName]);
        }
      });
    } else {
      const firstErrorField = Object.values(fields).find(field => 
        field && field.error && field.error.textContent !== ''
      );
      if (firstErrorField && firstErrorField.element) {
        firstErrorField.element.focus();
      }
    }
  });

  function validateField(fieldName, field) {
    if (!field || !field.element || !field.error) return false;
    
    const value = field.element.value.trim();
    let errorMessage = '';

    switch (fieldName) {
      case 'name':
        if (!value) errorMessage = 'Поле "Имя" обязательно для заполнения';
        else if (value.length < 2) errorMessage = 'Имя должно содержать минимум 2 символа';
        break;
      case 'email':
        if (!value) errorMessage = 'Поле "Email" обязательно для заполнения';
        else if (!isValidEmail(value)) errorMessage = 'Введите корректный email адрес';
        break;
      case 'message':
        if (!value) errorMessage = 'Поле "Сообщение" обязательно для заполнения';
        else if (value.length < 10) errorMessage = 'Сообщение должно содержать минимум 10 символов';
        break;
    }

    if (errorMessage) {
      field.error.textContent = errorMessage;
      field.element.setAttribute('aria-invalid', 'true');
      return false;
    } else {
      clearError(field);
      return true;
    }
  }

  function clearError(field) {
    if (field && field.error && field.element) {
      field.error.textContent = '';
      field.element.setAttribute('aria-invalid', 'false');
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    successMessage.setAttribute('role', 'alert');
    successMessage.setAttribute('aria-live', 'assertive');
    
    successMessage.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 16px;
      border-radius: 4px;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card-large");

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        
        filterButtons.forEach((btn) => {
          const isActive = btn === this;
          btn.classList.toggle("active", isActive);
          btn.setAttribute("aria-pressed", isActive.toString());
        });

        filterProjects(filterValue);
      });

      button.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  function filterProjects(filter) {
    const projectCards = document.querySelectorAll(".project-card-large");
    
    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-categories").split(",");
      const shouldShow = filter === "all" || categories.includes(filter);
      
      if (shouldShow) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
          card.removeAttribute('aria-hidden');
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        card.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  }
}

function initDiaryFunctionality() {
  const addEntryBtn = document.querySelector(".add-entry-btn");
  if (addEntryBtn) {
    addEntryBtn.addEventListener("click", function () {
      const newEntry = prompt("Введите новую задачу:");
      if (newEntry) {
        const diarySection = document.querySelector(".diary-section");
        const newDiaryEntry = document.createElement("div");
        newDiaryEntry.className = "diary-entry";

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${getMonthName(
          currentDate.getMonth()
        )}`;

        newDiaryEntry.innerHTML = `
          <div class="diary-date">${formattedDate}</div>
          <div class="diary-task">${newEntry}</div>
          <div class="status status-in-progress" role="status" aria-label="Задача в процессе">in progress</div>
        `;

        diarySection.insertBefore(newDiaryEntry, addEntryBtn);
        
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'visually-hidden';
        announcement.textContent = `Задача "${newEntry}" добавлена в дневник`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      }
    });

    addEntryBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  }

  function getMonthName(monthIndex) {
    const months = [
      "янв", "фев", "мар", "апр", "май", "июн",
      "июл", "авг", "сен", "окт", "ноя", "дек"
    ];
    return months[monthIndex];
  }
}

function initNavigation() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    const cleanLinkHref = linkHref.replace("../", "");
    const cleanCurrentPage = currentPage.split("/").pop();

    if (
      cleanLinkHref === cleanCurrentPage ||
      (cleanCurrentPage === "" && cleanLinkHref === "index.html")
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

function initProjectModals() {
  const projectCards = document.querySelectorAll(".project-card-large");
  const modal = document.getElementById("project-modal");
  const closeButton = document.querySelector(".close-modal");

  if (!modal || !closeButton) return;

  let previousActiveElement;

  projectCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const projectId = this.getAttribute("data-project");
      openProjectModal(projectId);
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const projectId = this.getAttribute("data-project");
        openProjectModal(projectId);
      }
    });
  });

  closeButton.addEventListener("click", closeModal);
  closeButton.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeModal();
    }
  });

  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  modal.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  const modal = document.getElementById("project-modal");
  
  if (!project || !modal) return;

  previousActiveElement = document.activeElement;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  const tagsContainer = document.getElementById("modal-tags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  const screenshotsContainer = document.getElementById("modal-screenshots");
  screenshotsContainer.innerHTML = "";

  if (project.screenshots && project.screenshots.length > 0) {
    project.screenshots.forEach((screenshot, index) => {
      const screenshotElement = document.createElement("div");
      screenshotElement.className = "screenshot";

      const imgElement = document.createElement("img");
      imgElement.srcset = `${screenshot.src400} 400w, ${screenshot.src1200} 1200w`;
      imgElement.sizes = "(max-width: 768px) 300px, 600px";
      imgElement.alt = screenshot.alt || `Скриншот проекта ${project.title} - ${index + 1}`;
      imgElement.className = "responsive-image";

      screenshotElement.appendChild(imgElement);
      screenshotsContainer.appendChild(screenshotElement);
    });
  } else {
    const noScreenshotsElement = document.createElement("div");
    noScreenshotsElement.className = "no-screenshots";
    noScreenshotsElement.textContent = "Скриншоты проекта временно недоступны";
    screenshotsContainer.appendChild(noScreenshotsElement);
  }

  const featuresContainer = document.getElementById("modal-features");
  featuresContainer.innerHTML = "";
  project.features.forEach((feature) => {
    const featureElement = document.createElement("li");
    featureElement.textContent = feature;
    featuresContainer.appendChild(featureElement);
  });

  const techContainer = document.getElementById("modal-technologies");
  techContainer.innerHTML = "";
  project.technologies.forEach((tech) => {
    const techElement = document.createElement("span");
    techElement.className = "tech-tag";
    techElement.textContent = tech;
    techContainer.appendChild(techElement);
  });

  const linksContainer = document.getElementById("modal-links");
  linksContainer.innerHTML = "";
  if (project.links.demo) {
    const demoLink = document.createElement("a");
    demoLink.href = project.links.demo;
    demoLink.className = "btn btn-primary";
    demoLink.textContent = "Живая версия";
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    linksContainer.appendChild(demoLink);
  }
  if (project.links.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.links.github;
    githubLink.className = "btn btn-secondary";
    githubLink.textContent = "Исходный код";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    linksContainer.appendChild(githubLink);
  }

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  
  setTimeout(() => {
    modal.classList.add("active");
    document.querySelector('.close-modal').focus();
  }, 10);

  document.querySelectorAll('body > *:not(.modal)').forEach(el => {
    if (!el.contains(modal)) {
      el.setAttribute('aria-hidden', 'true');
    }
  });
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "";

    document.querySelectorAll('[aria-hidden="true"]').forEach(el => {
      el.removeAttribute('aria-hidden');
    });

    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }, 300);
}

function initAnimations() {
  const projectCards = document.querySelectorAll(".project-card-large");
  
  if (projectCards.length > 0) {
    projectCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  }
}

function closeModal() {
  const activeModal = document.querySelector(".modal.active");
  if (activeModal) {
    activeModal.classList.remove("active");
    setTimeout(() => {
      activeModal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }
}