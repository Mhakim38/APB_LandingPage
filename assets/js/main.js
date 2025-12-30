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
// Mobile Menu Body Scroll Lock
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarCollapse) {
        // Lock body scroll when menu opens
        navbarCollapse.addEventListener('show.bs.collapse', function() {
            document.body.classList.add('menu-open');
        });
        
        // Unlock body scroll when menu closes
        navbarCollapse.addEventListener('hide.bs.collapse', function() {
            document.body.classList.remove('menu-open');
        });
        
        // Close menu when clicking on nav links
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
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
            name: "Ayam Penyet Best",
            description: "Our signature dish featuring perfectly fried chicken smashed to tender perfection, topped with our legendary house-made sambal that delivers the perfect kick. Served with fragrant steamed rice, crispy fried tofu, golden tempeh, fresh cucumber slices, and traditional Indonesian condiments for an authentic taste experience.",
            price: "RM 14.90"
        },
        {
            name: "Nasi Lemak Penyet",
            description: "A fusion of Malaysian and Indonesian classics! Aromatic coconut-infused rice served with our signature smashed fried chicken, house-made sambal, perfectly boiled egg, crunchy roasted peanuts, crispy fried anchovies, and fresh vegetables. A complete meal that combines the best of both culinary worlds.",
            price: "RM 17.90"
        },
        {
            name: "Ikan Bawal Penyet",
            description: "Premium white pomfret fish marinated with authentic Indonesian spices, deep-fried to golden perfection, then smashed to enhance the flavors. Accompanied by our signature fiery sambal, crispy fried tofu, golden tempeh, and a medley of fresh vegetables. A seafood lover's delight with bold, traditional flavors.",
            price: "RM 17.90"
        },
        {
            name: "Lele Penyet",
            description: "Fresh catfish expertly marinated in a blend of traditional Indonesian spices, deep-fried until crispy on the outside yet tender inside, then smashed for maximum flavor absorption. Served with our legendary sambal, crispy tofu, golden tempeh, fragrant steamed rice, and fresh garden vegetables. An authentic Indonesian favorite that's both hearty and satisfying.",
            price: "RM 12.90"
        },
        {
            name: "Bakso Kuah",
            description: "Comforting Indonesian meatball soup featuring juicy, hand-made beef balls swimming in a rich, aromatic broth infused with herbs and spices. Choose your favorite noodles—silky Sohun (glass noodles), chewy Mee (yellow noodles), or delicate Bihun (rice vermicelli). Topped with fresh bok choy, fried shallots, and served with crispy crackers on the side. Perfect for warming the soul!",
            price: "RM 11.90"
        },
        {
            name: "Tauhu Tempe Penyet",
            description: "A delicious vegetarian option! Golden-fried tofu (bean curd) and tempeh marinated in aromatic Indonesian spices, then smashed to perfection to absorb our signature sambal's bold flavors. Served with fresh cucumber, cabbage, and tomatoes. Packed with protein and authentic taste that even meat lovers will enjoy!",
            price: "RM 8.90"
        },
        {
            name: "Rendang Daging Padang Asli",
            description: "Authentic Padang-style beef rendang slow-cooked to perfection in aromatic coconut milk and a complex blend of traditional spices including lemongrass, galangal, turmeric, and chilies. The beef is simmered for hours until tender and infused with rich, deep flavors, then cooked until the sauce reduces to a thick, dark coating. A truly authentic Indonesian culinary experience that melts in your mouth.",
            price: "RM 14.90"
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
        document.getElementById('dishPriceMobile').textContent = dish.price;
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
// Feedback Carousel (Custom Sliding Window)
// ===================================
const feedbackCarousel = {
    currentIndex: 0,
    cards: [],
    dots: [],
    track: null,
    totalCards: 6,
    visibleCards: 3,
    autoRotateTimer: null,
    autoRotateInterval: 5000,

    init: function() {
        this.cards = document.querySelectorAll('.feedback-card');
        this.dots = document.querySelectorAll('.feedback-dot');
        this.track = document.getElementById('feedbackCarouselTrack');
        const prevBtn = document.getElementById('feedbackPrev');
        const nextBtn = document.getElementById('feedbackNext');
        
        // Add click handlers to arrows
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }

        // Add click handlers to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateCarousel();
                this.resetTimer();
            });
        });

        // Initialize position
        this.updateCarousel();
        
        // Start auto-rotation
        this.startAutoRotate();
    },

    startAutoRotate: function() {
        this.stopAutoRotate();
        this.autoRotateTimer = setInterval(() => {
            this.next();
        }, this.autoRotateInterval);
    },

    stopAutoRotate: function() {
        if (this.autoRotateTimer) {
            clearInterval(this.autoRotateTimer);
            this.autoRotateTimer = null;
        }
    },

    resetTimer: function() {
        this.startAutoRotate();
    },

    next: function() {
        // On mobile, cycle through all cards individually
        if (window.innerWidth < 768) {
            this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        } else {
            // On desktop, cycle through 3-card views
            const maxIndex = this.totalCards - this.visibleCards; // 6 - 3 = 3
            this.currentIndex = (this.currentIndex + 1) % (maxIndex + 1);
        }
        this.updateCarousel();
        this.resetTimer();
    },

    prev: function() {
        // On mobile, cycle through all cards individually
        if (window.innerWidth < 768) {
            this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        } else {
            // On desktop, cycle through 3-card views
            const maxIndex = this.totalCards - this.visibleCards; // 6 - 3 = 3
            this.currentIndex = (this.currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
        }
        this.updateCarousel();
        this.resetTimer();
    },

    updateCarousel: function() {
        // Mobile: show one card at a time
        if (window.innerWidth < 768) {
            // Each card is 100% width + 2rem gap
            // translateX needs to move by (100% + gap) for each card
            const translateValue = -(this.currentIndex * 100);
            const gapOffset = this.currentIndex * 2; // 2rem gap between cards
            this.track.style.transform = `translateX(calc(${translateValue}% - ${gapOffset}rem))`;
        } else {
            // Desktop: show 3 cards, scroll by one card position
            const cardWidth = (100 - (2 * 2 * 100 / this.track.offsetWidth)) / 3;
            const gapInPercent = (2 / this.track.offsetWidth) * 100;
            const translateValue = -(this.currentIndex * (cardWidth + gapInPercent));
            this.track.style.transform = `translateX(calc(${translateValue}% - ${this.currentIndex * 2}rem))`;
        }
        
        // Update dots
        this.updateDots();
    },

    updateDots: function() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
};

// Initialize feedback carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    feedbackCarousel.init();
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
            
            // TODO: Replace with actual WhatsApp number
            const whatsappNumber = '60164103533'; // Format: 60123456789 (country code + number, no +)
            
            // Format the date and time
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-GB', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            });
            const formattedTime = dateObj.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            const formattedDateTime = `${formattedDate} at ${formattedTime}`;
            
            // Construct WhatsApp message
            let whatsappMessage = `Hello,\n\n`;
            whatsappMessage += `I would like to book a table with the following details:\n\n`;
            whatsappMessage += `Name: ${name}\n`;
            whatsappMessage += `Number of Guests (Pax): ${pax}\n`;
            whatsappMessage += `Date & Time: ${formattedDateTime}\n`;
            
            if (message) {
                whatsappMessage += `\nMessage / Special Request:\n${message}\n`;
            }
            
            whatsappMessage += `\nPlease let me know if the table is available.\nThank you.`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            
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
