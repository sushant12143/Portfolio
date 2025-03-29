document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set current year in footer
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });
    
    // Set last updated date
    const lastUpdatedElements = document.querySelectorAll('#last-updated');
    const formattedDate = new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    lastUpdatedElements.forEach(el => {
      el.textContent = `Last updated: ${formattedDate}`;
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    function handleScroll() {
      if (window.scrollY > 10) {
        header.classList.add('bg-background/90', 'backdrop-blur-md', 'shadow-sm');
      } else {
        header.classList.remove('bg-background/90', 'backdrop-blur-md', 'shadow-sm');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on page load
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        menuIcon.classList.toggle('block');
        closeIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('block');
      });
    }
    
    // Highlight active nav link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath.endsWith(linkPath)) {
        link.classList.add('active');
      }
    });
    
    // Add entrance animations
    document.body.classList.add('page-loaded');
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('page-loaded');
    };
  });