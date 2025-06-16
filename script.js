const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
    });

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Get form inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Reset previous errors
        formStatus.className = 'form-status';
        [name, email, message].forEach(input => input.classList.remove('error'));

        // Validate inputs
        if (name.value.length < 2) {
            name.classList.add('error');
            formStatus.textContent = 'Please enter a valid name';
            formStatus.classList.add('error');
            return;
        }

        if (!validateEmail(email.value)) {
            email.classList.add('error');
            formStatus.textContent = 'Please enter a valid email';
            formStatus.classList.add('error');
            return;
        }

        if (message.value.length < 10) {
            message.classList.add('error');
            formStatus.textContent = 'Message must be at least 10 characters long';
            formStatus.classList.add('error');
            return;
        }

        try {
            // Show sending status
            formStatus.textContent = 'Sending...';
            formStatus.classList.add('success');

            // Simulate sending (replace this with your actual form submission)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.classList.add('success');

            // Reset form
            contactForm.reset();

            // Clear success message after 3 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
            }, 3000);

        } catch (error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.classList.add('error');
        }
    };

    contactForm.addEventListener('submit', handleSubmit);
});

