// Shared JS helpers across pages

// Footer year (all pages have an element with id="year")
(function setYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Course details modal population (Home/Courses pages)
(function modalCourseDetails(){
  const modal = document.getElementById('detailsModal');
  if (!modal) return;

  modal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    if (!button) return;

    const courseName = button.getAttribute('data-course') || 'Course Name';
    const duration = button.getAttribute('data-duration') || '';
    const fee = button.getAttribute('data-fee') || '';

    const nameEl = document.getElementById('modalCourseName');
    const durationEl = document.getElementById('modalDuration');
    const feeEl = document.getElementById('modalFee');

    if (nameEl) nameEl.textContent = courseName;
    if (durationEl) durationEl.textContent = duration ? `Duration: ${duration}` : 'Duration: '; 
    if (feeEl) feeEl.textContent = fee ? `Fee: ${fee}` : 'Fee: '; 
  });
})();

// Registration form success alert (register.html)
(function registrationForm(){
  const form = document.getElementById('registrationForm');
  const alertEl = document.getElementById('successAlert');
  if (!form || !alertEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic demo success behavior
    alertEl.classList.remove('d-none');

    // Optional: scroll to the alert
    alertEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Reset form after showing message
    form.reset();
  });
})();

// Contact form demo success alert (contact.html)
(function contactForm(){
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.remove('d-none');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    form.reset();
  });
})();

