const modal = document.querySelector('.modal');

function openModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');

  // Wait for the animation to finish before hiding the modal
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // Match the transition duration
}

// Example usage:
document.querySelector('#openModalButton').addEventListener('click', () => {
  modal.style.display = 'block'; // Ensure modal is visible for animations
  openModal();
});

document.querySelector('#closeModalButton').addEventListener('click', closeModal);

