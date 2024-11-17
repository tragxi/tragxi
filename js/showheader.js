// Function to toggle header visibility based on scroll position
function toggleHeaderVisibility() {
    const header = document.getElementById('main-header');
    const revealSection = document.getElementById('reveal-section');
    const logoSectionComplex = document.getElementById('logoSectionComplex');
    const logoSectionComplex1 = document.getElementById('logoSectionComplex1');
    const logoSectionComplex2 = document.getElementById('logoSectionComplex2');
    const logoSectionEasy = document.getElementById('logoSectionEasy');
    const navButton = document.getElementById('nav-button'); 

    const scrollPosition = window.scrollY || window.pageYOffset;

    // Toggle header visibility based on scroll position
    if (scrollPosition < revealSection.offsetTop - 79) {
        header.style.background = 'transparent';
        logoSectionComplex.style.display = 'none';  // Hide the complex header
        logoSectionComplex1.style.display = 'none';
        logoSectionComplex2.style.display = 'none';

        logoSectionEasy.style.display = 'contents';
        if (navButton) {
            navButton.style.display = 'none'; // Hide nav-button in mobile version
        }
    } else {
        header.style.background = 'aliceblue';
        logoSectionComplex.style.display = 'flex';
        logoSectionComplex1.style.display = 'flex';
        logoSectionComplex2.style.display = 'block'; // Assuming you want to display this

        logoSectionEasy.style.display = 'none';  // Hide the simplified header
        
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            navButton.style.display = 'block'; // Show nav-button in mobile version
            // If comment these two, laptop can show correctly, but mobile showing wrong
            logoSectionComplex1.style.display = 'none';
            logoSectionComplex2.style.display = 'none';
          }
    }

}

// Event listener for scroll events
window.addEventListener('scroll', toggleHeaderVisibility);

// Initial call to set header visibility on page load
toggleHeaderVisibility();
