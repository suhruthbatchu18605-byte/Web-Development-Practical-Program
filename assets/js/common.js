// Global shared JS helpers
document.addEventListener('DOMContentLoaded', () => {
  // Live filter for listing pages
  const searchInput = document.getElementById('search-programs');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.program-item-card');
      items.forEach(card => {
        const title = card.querySelector('.item-title')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.item-desc')?.textContent.toLowerCase() || '';
        const num = card.querySelector('.item-num')?.textContent.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query) || num.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
