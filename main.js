// Toggle Dark Mode
const toggleDarkMode = document.getElementById('toggleDarkMode');
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Example to trigger modal popup for video
const videoCards = document.querySelectorAll('.video-card');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');

videoCards.forEach(card => {
  card.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  videoModal.classList.add('hidden');
});
