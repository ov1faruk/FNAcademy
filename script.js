// Toggle sidebar
document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  
    // Toggle sidebar when back button is clicked
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  });
  