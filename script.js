// Contact form submission: prepare mailto link
function submitForm(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = 'red';
    return false;
  }

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  status.textContent = "Opening email client...";
  status.style.color = getComputedStyle(document.body).getPropertyValue('--accent');

  window.location.href = `mailto:deeven.pedapalli@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    status.textContent = "";
  }, 3000);

  return false;
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
});


// Resume toggle button script
const resumeBtn = document.getElementById('resume-toggle-btn');
const resumeSection = document.getElementById('resume-section');

if (resumeBtn) {
  resumeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (resumeSection.style.display === "none" || resumeSection.style.display === "") {
      resumeSection.style.display = "block";
      resumeBtn.textContent = "Hide Resume";
      resumeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      resumeSection.style.display = "none";
      resumeBtn.textContent = "See Resume";
    }
  });
}

resumeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  resumeSection.classList.toggle("show");
  resumeBtn.textContent = resumeSection.classList.contains("show") ? "Hide Resume" : "See Resume";
  if (resumeSection.classList.contains("show")) {
    resumeSection.scrollIntoView({ behavior: "smooth" });
  }
});

