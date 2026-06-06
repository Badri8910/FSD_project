// Shared JS (kept intentionally small)

(function () {
  const searchBox = document.getElementById('searchBox');
  const table = document.getElementById('studentsTable');
  const noResultsAlert = document.getElementById('noResultsAlert');

  if (searchBox && table) {
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    searchBox.addEventListener('input', function () {
      const query = searchBox.value.trim().toLowerCase();
      let anyVisible = false;

      rows.forEach((row) => {
        const text = row.innerText.toLowerCase();
        const match = text.includes(query);
        row.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });

      if (noResultsAlert) {
        noResultsAlert.classList.toggle('d-none', anyVisible);
      }
    });
  }
})();

