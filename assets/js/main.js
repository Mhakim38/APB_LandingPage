// ===================================
// Navbar Scroll Effect
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Menu Carousel
// ===================================
const menuCarousel = {
    currentIndex: 0,
    items: [],
    dishes: [
        {
            name: "Ayam Penyet Original",
            description: "Traditional smashed fried chicken with our signature sambal, served with steamed rice, fresh vegetables, and condiments.",
            price: "RM 12.90"
        },
        {
            name: "Ayam Penyet Extra Spicy",
            description: "For spice lovers! Our classic Ayam Penyet with extra hot sambal that will set your taste buds on fire.",
            price: "RM 13.90"
        },
        {
            name: "Ayam Penyet Combo",
            description: "Our signature smashed fried chicken served with fragrant rice, fresh vegetables, crispy tempeh, tofu, and our legendary sambal that packs the perfect punch of flavor and heat.",
            price: "RM 15.90"
        },
        {
            name: "Ayam Penyet Special",
            description: "Premium cut chicken with our special blend of spices, served with extra portions of tempeh, tofu, and vegetables.",
            price: "RM 17.90"
        },
        {
            name: "Ayam Penyet Family Pack",
            description: "Perfect for family dining! 4 pieces of Ayam Penyet with rice, vegetables, and all the condiments. Feeds 3-4 people.",
            price: "RM 45.90"
        },
        {
            name: "Ayam Penyet Deluxe",
            description: "Our most luxurious offering! Premium chicken with special marinade, extra sides, and chef's special sambal blend.",
            price: "RM 19.90"
        },
        {
            name: "Ayam Penyet Jumbo",
            description: "Extra large portion for the hearty appetite! Double the chicken, double the flavor, with all the traditional accompaniments.",
            price: "RM 22.90"
        }
    ],

    init: function() {
        this.items = document.querySelectorAll('.menu-item');
        this.updateCarousel();
        
        // Add click handlers to menu items
        this.items.forEach((item, index) => {
            item.addEventListener('click', () => {
                const position = parseInt(item.getAttribute('data-position'));
                if (position !== 0 && Math.abs(position) <= 3) {
                    // Calculate how many steps to rotate
                    if (position > 0) {
                        for (let i = 0; i < position; i++) {
                            this.next();
                        }
                    } else {
                        for (let i = 0; i < Math.abs(position); i++) {
                            this.prev();
                        }
                    }
                }
            });
        });
    },

    updateCarousel: function() {
        this.items.forEach((item, index) => {
            // Calculate relative position from current index
            let position = index - this.currentIndex;
            
            // Normalize position to range [-3, 3]
            if (position > 3) {
                position = position - this.items.length;
            } else if (position < -3) {
                position = position + this.items.length;
            }
            
            // Set position attribute for CSS targeting
            item.setAttribute('data-position', position);
        });
        
        this.updateDetails();
    },

    updateDetails: function() {
        const dish = this.dishes[this.currentIndex];
        document.getElementById('dishName').textContent = dish.name;
        document.getElementById('dishDescription').textContent = dish.description;
        document.getElementById('dishPrice').textContent = dish.price;
    },

    next: function() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    },

    prev: function() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }
};

// Initialize menu carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    menuCarousel.init();
});

// ===================================
// Feedback Carousel (Bootstrap 4)
// ===================================
// Bootstrap carousel handles the sliding automatically
// No custom JavaScript needed

// ===================================
// Booking Form Handler
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const pax = document.getElementById('pax').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !pax || !date) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show success message
            alert(`Thank you ${name}! Your reservation for ${pax} person(s) has been received. We'll contact you shortly to confirm your booking.`);
            
            // Reset form
            bookingForm.reset();
        });
    }
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ===================================
// Navbar Mobile Menu Close on Click
// ===================================
// Scroll Animations using Intersection Observer
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all sections with animate-on-scroll class
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
        animateOnScroll.observe(section);
    });
});

// ===================================
// Close Mobile Menu on Link Click
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});
