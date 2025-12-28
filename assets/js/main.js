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
    currentIndex: 2,
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
        }
    ],

    init: function() {
        this.items = document.querySelectorAll('.menu-item');
        this.updateCarousel();
    },

    updateCarousel: function() {
        this.items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === this.currentIndex) {
                item.classList.add('active');
            }
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
// Feedback Carousel
// ===================================
const feedbackCarousel = {
    currentPage: 0,
    itemsPerPage: 3,
    cards: [],
    dots: [],

    init: function() {
        this.cards = document.querySelectorAll('.feedback-card');
        this.createDots();
        this.updateView();
        
        // Auto-rotate every 5 seconds
        setInterval(() => {
            this.next();
        }, 5000);

        // Add touch support for mobile
        let startX = 0;
        const carousel = document.getElementById('feedbackCarousel');
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    },

    createDots: function() {
        const dotsContainer = document.getElementById('feedbackDots');
        const totalPages = Math.ceil(this.cards.length / this.getItemsPerPage());
        
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('feedback-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToPage(i));
            dotsContainer.appendChild(dot);
            this.dots.push(dot);
        }
    },

    getItemsPerPage: function() {
        // Responsive items per page
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 992) return 2;
        return 3;
    },

    updateView: function() {
        const itemsPerPage = this.getItemsPerPage();
        const start = this.currentPage * itemsPerPage;
        const end = start + itemsPerPage;

        this.cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === this.currentPage) {
                dot.classList.add('active');
            }
        });
    },

    next: function() {
        const totalPages = Math.ceil(this.cards.length / this.getItemsPerPage());
        this.currentPage = (this.currentPage + 1) % totalPages;
        this.updateView();
    },

    prev: function() {
        const totalPages = Math.ceil(this.cards.length / this.getItemsPerPage());
        this.currentPage = (this.currentPage - 1 + totalPages) % totalPages;
        this.updateView();
    },

    goToPage: function(page) {
        this.currentPage = page;
        this.updateView();
    }
};

// Initialize feedback carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    feedbackCarousel.init();
});

// Update view on window resize
window.addEventListener('resize', function() {
    if (typeof feedbackCarousel !== 'undefined') {
        feedbackCarousel.updateView();
    }
});

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
