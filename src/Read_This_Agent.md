# APB Landing Page – Final UI Reference PRD

> This document reflects the **latest visual reference provided**.
> Follow layout, spacing, color usage, and hierarchy as shown.

---

## Global Setup

### Body & Base

* **Body background:** `#FAFAFA` (white-ish, not pure white)
* Use **Bootstrap 5** for the grid system
* Mobile-first, responsive
* Clean, minimal, no inline CSS or JS
* Separate files:

  * `/index.html`
  * `/assets/css/style.css`
  * `/assets/js/main.js`

---

## Color Palette (CSS Root Variables)

```css
:root {
  --primary: #2F5E2C;
  --secondary: #8BC53F;
  --main: #F5B113;
  --tertiary: #F5A391;
  --muted: #808097;
  --annotation: #D1121F;
  --white: #FFFFFF;
  --font-tertiary: #4A2E2A;
  --body-bg: #FAFAFA;
}
```

⚠️ All colors **must be referenced via variables only**.

---

## Navbar

### Layout

* Left: **Logo**
* Right:

  * Menu
  * About Us
  * Feedback
  * **Book Table** (pill button)

### Styling

* Background: **transparent** when at top (Hero)
* On scroll:

  * Background becomes **solid main color**
  * Smooth transition
* Book Table button:

  * Background: `--secondary`
  * Text: `--primary`
  * Fully pill-shaped

---

## Section 1 – Hero Section

### Background

* Color: `--main`
* Full screen height (`100vh`)
* **Flat rectangular background** (no rounded edges)

### Layout

* **Left:** Text + buttons
* **Right:** Image container with rounded corners

### Content (Left)

* **H1:** Ayam Penyet **Best**

  * “Best” color: `--annotation`
* **H2:** Mayang Mall
* **H3:** Terengganu
* Paragraph text exactly as reference

### Buttons

* Menu:

  * Background: `--annotation`
  * Text: white
* Feedback:

  * Background: white
  * Text: `--primary`

---

## Section 2 – Our Menu (Oval Transition Section)

### Transition Design

* **Half-oval shaped background** at the top of menu section
* Same color as Hero (`--main`)
* Visually connects Hero → Menu seamlessly
* Uses CSS: `border-radius: 0 0 50% 50% / 0 0 100% 100%;` to create bottom-rounded half-oval
* Dishes positioned along the curved edge of the half-oval

### Title

* **H2:** Our **Menu**

  * “Menu” in `--primary`
* Subtitle: **Main Dish**

---

### Menu Carousel

* 5 dishes total
* Center dish:

  * Largest
  * Highlighted
* Side dishes:

  * Smaller
  * Slightly faded
* Navigation:

  * Left & Right arrow icons
* Carousel sits visually **on top of oval**

#### Implementation Details (Current)

* **Full Circular Carousel**: 10 menu items total (2 complete sets of 5 dishes)
  * Creates seamless infinite circular rotation
  * Duplicate dishes maintain continuity during rotation
* **Circular Positioning**: 
  * Uses CSS `transform: rotate() translateY() rotate()` for circular arc
  * Each position rotates 36 degrees (360° / 10 positions)
  * Dishes arranged in complete circle around center point
  * Visible dishes: bottom half of circle (positions -2 to 2)
  * Hidden dishes: top half behind hero section (positions ±3, ±4)
* **Z-Index Trick**:
  * Oval background: `z-index: -1`
  * Hidden dishes (behind hero): `opacity: 0`, `z-index: 0-1`
  * Visible dishes: `z-index: 6-10` based on position
  * Creates illusion of dishes disappearing behind hero section
* **Position System**: Uses data-position attributes (-4 to 4)
  * Position 0 (center): Bottom, full size (220px), opacity 1
  * Position ±1: 36° rotation, 75% scale (170px), opacity 0.85
  * Position ±2: 72° rotation, 60% scale (140px), opacity 0.65
  * Position ±3: 108° rotation, hidden behind hero (opacity 0)
  * Position ±4: 144° rotation, hidden behind hero (opacity 0)
* **Interactive**: Click visible dishes to bring them to center
* **Responsive**: Adjusts circle size and visible dishes per breakpoint

---

### Menu Detail Area (Below – Dark Background)

* Background: **dark / near black**
* Rounded container
* Content:

  * Dish name (H3)
  * Left: Description text
  * Right:

    * Book Table button (same style as navbar)
    * Feedback button
    * Price (H2) – bold and clear

---

## Section 3 – Feedback

### Background

* Dark (as per reference)
* Body background still remains white outside section

### Title

* **H2:** What They Say ?
* Subtitle text exactly as reference

### Feedback Cards

* Rounded cards
* Background: `--tertiary`
* No images
* Content:

  * Feedback text
  * Name
  * Position (e.g. Local Guide)

### Layout

* Carousel / horizontal scroll
* Responsive (1 card mobile, 3 desktop)

#### Implementation Details (Current - Bootstrap 4 Carousel)

* **Bootstrap 5 Native Carousel**: Uses Bootstrap 5's `.carousel` component
  * `data-bs-ride="carousel"` for auto-rotation (Bootstrap 5 syntax)
  * `data-bs-interval="5000"` for 5-second intervals
  * `data-bs-slide="prev"` and `data-bs-slide="next"` for navigation controls
* **Sliding Window**: 6 slides total, each showing 3 feedback cards
  * Slide 1: Cards 1, 2, 3 (Ahmad, Sarah, Muhamad)
  * Slide 2: Cards 2, 3, 4 (Sarah, Muhamad, Nurul)
  * Slide 3: Cards 3, 4, 5 (Muhamad, Nurul, Tan)
  * Slide 4: Cards 4, 5, 6 (Nurul, Tan, Siti)
  * Slide 5: Cards 5, 6, 1 (Tan, Siti, Ahmad) - wrapping back
  * Slide 6: Cards 6, 1, 2 (Siti, Ahmad, Sarah) - wrapping back
  * Each button click advances by ONE card position
  * Creates true infinite loop with seamless wrapping
* **Navigation Controls**:
  * Circular arrow buttons positioned at carousel center
  * Custom styled with white background and primary color icons
  * Hover effect: changes to secondary color with scale animation
* **Grid Layout**: Bootstrap `col-lg-4` for 3-column desktop layout
  * Responsive breakpoints adjust to single column on mobile
* **Auto-rotation**: Automatically cycles through slides every 5 seconds
* **No Custom JavaScript**: Relies entirely on Bootstrap 4's built-in carousel functionality

---

## Section 4 – Book a Table

### Background

* Color: `--main`

### Layout

**Two-column form**

* Left:

  * Name
  * Pax
  * Date
* Right:

  * Message textarea
  * Placeholder:

    > I want Ayam Penyet Extra spicy

### Submit Button

* Full width
* Background: `--secondary`
* Text: `--primary`
* Rounded pill

---

## Section 5 – Footer

### Background

* `--primary`

### Layout

**3 Columns**

1. Logo + short description
2. Contact Us (address & phone)
3. Social Media

### Footer Bottom Text

```
© 2016–2025 Ayam Penyet Bagus Sdn Bhd 903834-T
Design by Santai Kuppi
```

---

## Responsiveness Rules

* Navbar collapses to hamburger
* Carousel swipe enabled on mobile
* Buttons stay readable
* Proper spacing between stacked sections

---

## Git Commit Rules (MANDATORY)

Each major step must be committed separately.

### Example Commit Messages

* `chore: setup project structure and bootstrap`
* `feat: implement hero section layout`
* `feat: add oval menu transition section`
* `feat: implement menu carousel and details`
* `feat: add feedback carousel section`
* `feat: implement booking form section`
* `feat: build footer layout`
* `style: refine spacing, colors, and responsiveness`
* `fix: mobile layout and overflow issues`

Commit messages must be **clear, senior-level, and descriptive**.

---

## Change Log

### December 29, 2025

#### Fullscreen Mobile Menu Implementation

**Change:** Transformed mobile hamburger menu into a fullscreen overlay with centered menu items, providing a modern and immersive navigation experience on mobile devices.

**Reason:** User requested a fullscreen mobile menu experience where clicking the hamburger button opens a fullscreen overlay with menu items centered in the middle of the page, creating a better mobile-first experience.

**Implementation:**

* **CSS Changes (Fullscreen Overlay):**
  * **Position:** Changed from relative dropdown to `position: fixed` covering entire viewport
  * **Dimensions:** `top: 0, left: 0, right: 0, bottom: 0` for full coverage
  * **Z-Index:** Set to 1040 for proper layering, toggler at 1050
  * **Centering:** Used flexbox with `align-items: center` and `justify-content: center`
  * **Background:** Solid `--main` color (or `--font-tertiary` when scrolled)
  * **Transitions:** Smooth fade in/out with opacity and visibility transitions (0.3s ease)
  * **Initial State:** `opacity: 0` and `visibility: hidden` when closed
  * **Active State:** `opacity: 1` and `visibility: visible` when `.show` class applied

* **Menu Item Styling:**
  * **Text Alignment:** Center-aligned for better visual balance
  * **Font Size:** Increased to 1.5rem for better readability
  * **Spacing:** 1rem vertical margin between items
  * **Padding:** 1rem 2rem for comfortable touch targets
  * **Hover Effect:** Scale transform (1.05) + background highlight
  * **Border Radius:** 10px rounded corners on hover states

* **Book Table Button:**
  * **Size:** Larger padding (1rem 3rem), font-size 1.3rem
  * **Width:** Auto width with 250px minimum for prominence
  * **Position:** Centered with 1.5rem top margin
  * **Display:** Inline-block for proper centering

* **JavaScript Enhancements:**
  * **Body Scroll Lock:** Prevents background scrolling when menu is open
    * Adds `.menu-open` class to body on `show.bs.collapse` event
    * Removes class on `hide.bs.collapse` event
    * CSS rule: `body.menu-open { overflow: hidden; }`
  * **Auto-Close on Nav Click:** Menu automatically closes when clicking nav links
    * Detects window width < 992px (mobile breakpoint)
    * Uses Bootstrap's Collapse API to programmatically hide menu
    * Smooth user experience without manual close
  * **Bootstrap Events:** Leverages native Bootstrap 5 collapse events for reliability

* **Toggler Improvements:**
  * **Z-Index:** 1050 to stay above fullscreen overlay
  * **Position:** Relative positioning for proper stacking
  * **Icon Transition:** Smooth 0.3s ease transition on toggle icon

**Benefits:**

* **Modern UX:** Fullscreen overlay provides focus and eliminates distractions
* **Better Visibility:** Large, centered menu items are easy to read and tap
* **Smooth Animations:** Fade in/out transitions create polished experience
* **No Body Scroll:** Prevents awkward scrolling of background content
* **Auto-Close:** Menu closes automatically after selection for intuitive flow
* **Bootstrap Native:** Uses Bootstrap 5's collapse component and events
* **Touch-Friendly:** Large touch targets with hover/active states
* **Consistent Branding:** Maintains brand colors in fullscreen context

**Behavior:**

* Click hamburger → fullscreen overlay fades in with menu centered
* Background scroll is locked when menu is open
* Hover menu items → slight scale animation + background highlight
* Click any nav link → menu automatically closes and navigates
* Click hamburger again → menu fades out smoothly
* Color scheme changes based on scroll position (main/dark)

**Technical Details:**

* Uses Bootstrap 5's `.collapse` and `.show` classes
* Leverages Bootstrap events: `show.bs.collapse`, `hide.bs.collapse`
* No custom collapse logic needed - pure Bootstrap API
* CSS transitions handle visual animations
* JavaScript only manages body scroll lock and auto-close behavior

---

## Change Log

### December 29, 2025

#### Mobile UI/UX Enhancement for Hero, Menu, and Feedback Sections

**Change:** Significantly improved mobile experience for Hero section, Menu carousel, and Feedback cards with enhanced visual hierarchy, better spacing, and improved readability across all mobile devices.

**Reason:** User reported that Hero, Menu, and Feedback sections were not displaying well on mobile devices. The previous responsive implementation needed refinement for better mobile aesthetics and usability.

**Implementation:**

* **Hero Section Mobile Improvements:**
  * **Layout:** Added center text alignment for better mobile reading
  * **Spacing:** Optimized padding (80px→70px→65px across breakpoints)
  * **Typography:** Improved line-height (1.1-1.15) for tighter, more readable text
  * **Image:** Added max-width constraints (90% on tablet, 100% on mobile)
  * **Image Radius:** Progressive reduction (30px→20px→15px) for mobile
  * **Buttons:** Enhanced with box-shadow (0 3px 10px) for depth, better gap spacing (1rem→0.8rem→0.7rem)
  * **Description:** Improved max-width (100% on mobile) and line-height (1.7-1.65)
  * **Min-height:** Removed 100vh on mobile for natural content flow

* **Menu Section Mobile Improvements:**
  * **Oval Height:** Optimized across breakpoints (320px→340px→310px)
  * **Center Dish:** Larger on mobile (160px→170px→155px→145px)
  * **Side Dishes:** Better sizing (120px→130px→115px→105px)
  * **Positioning:** Adjusted left percentages for better arc display
    * Position 1: 70%→72% on smaller screens
    * Position -1: 30%→28% on smaller screens
  * **Bottom Spacing:** Optimized (70px→90px→85px) for better oval alignment
  * **Navigation Buttons:** Progressive sizing (40px→42px→38px) with proper bottom positioning
  * **Menu Detail:** Enhanced padding and margins for mobile readability
  * **Dish Name:** Center-aligned, progressive sizing (1.7rem→1.6rem→1.5rem)
  * **Dish Description:** Center-aligned with improved line-height (1.7-1.65)
  * **Section Title:** Better mobile sizing (2.2rem→1.9rem→1.75rem)

* **Feedback Cards Mobile Improvements:**
  * **Card Padding:** Enhanced (2rem→2rem 1.5rem→1.8rem 1.3rem→1.6rem 1.2rem)
  * **Min-height:** Adjusted (280px→300px→280px→270px) for content balance
  * **Border Radius:** Progressive (20px→20px→18px) for mobile aesthetics
  * **Box Shadow:** Increased depth (0 6px 20px) for better card definition
  * **Text Size:** Larger on mobile (1.05rem→1rem→0.98rem) for readability
  * **Line Height:** Enhanced (1.75-1.7) for comfortable reading
  * **Name Size:** Better prominence (1.15rem→1.1rem)
  * **Position Text:** Slightly larger (0.95rem→0.98rem)
  * **Wrapper Padding:** Optimized (60px→55px→50px→48px) for edge spacing
  * **Navigation:** Better sizing (42px→38px) with icon adjustments
  * **Section Titles:** Progressive scaling for mobile hierarchy

* **Cross-Section Improvements:**
  * **Container Padding:** Tighter on extra small (15px) for edge-to-edge feel
  * **Typography Scale:** Consistent progressive reduction across all breakpoints
  * **Touch Targets:** Maintained 38-48px minimum for accessibility
  * **Visual Hierarchy:** Enhanced contrast between active/inactive elements
  * **Spacing Consistency:** Unified gap/margin system across breakpoints

**Responsive Breakpoint Summary:**

* **≤480px (Extra Small):**
  * Hero: 1.8rem title, 145px center dish, 270px feedback cards
  * Tightest spacing, smallest touch targets (38px)
  
* **≤576px (Small Mobile):**
  * Hero: 2rem title, 155px center dish, 280px feedback cards
  * Balanced spacing, standard touch targets (42px)
  
* **≤768px (Tablet):**
  * Hero: 2.5rem title, 170px center dish, 300px feedback cards
  * Comfortable spacing, enhanced touch targets (42-44px)
  
* **≤991px (Large Tablet):**
  * Maintained desktop layout with proportional scaling

**Benefits:**

* **Better Visual Hierarchy:** Clear distinction between primary and secondary content
* **Improved Readability:** Optimized typography and spacing for mobile screens
* **Enhanced Touch Experience:** Better button placement and sizing
* **Balanced Aesthetics:** Cards and elements properly scaled for each breakpoint
* **Natural Flow:** Content breathes better without cramped spacing
* **Consistent Branding:** Visual identity maintained across all screen sizes
* **Performance:** Optimized sizes reduce rendering complexity on mobile

**Behavior:**

* Hero section centers content on mobile for easier thumb reach
* Menu carousel dishes properly positioned along oval curve
* Feedback cards have comfortable padding with easy-to-read text
* All interactive elements remain easily tappable
* Images scale proportionally without distortion
* Text remains readable without horizontal scrolling

---

## Change Log

### December 29, 2025

#### Comprehensive Responsive Design Enhancement

**Change:** Enhanced responsive design across all screen sizes with improved mobile-first approach, better touch targets, and optimized layouts for smartphones, tablets, and desktops.

**Reason:** The PRD requires full responsiveness with mobile-first design. While basic responsive rules existed, the implementation needed significant enhancements for optimal mobile user experience, especially for forms, carousels, and touch interactions.

**Implementation:**

* **CSS Responsive Breakpoints Added:**
  * **Extra Small (≤480px):** Landscape phones
    * Reduced hero title to 1.75rem
    * Smaller menu carousel items (140px center, 100px sides)
    * Compact feedback cards (1.5rem padding, 260px min-height)
    * Reduced section titles to 1.6rem
    * Tighter container padding (15px)
  
  * **Small Mobile (≤576px):** Portrait phones
    * Hero title: 2rem
    * Section titles: 1.8rem
    * Form inputs: 16px font-size (prevents iOS zoom)
    * Full-width buttons with 48px min-height (accessible touch targets)
    * Stacked dish actions vertically
    * Reduced footer padding (40px/20px)
    * Oval background: 350px height
  
  * **Tablet (≤768px):** Tablets and large phones
    * Hero section: reduced padding (80px top, 40px bottom)
    * Hero title: 2.5rem
    * Buttons: 1rem padding, 48px min-height for touch
    * Carousel navigation: 44px × 44px (Apple's recommended touch target)
    * Section padding: 50px vertical
    * Menu carousel: bottom position adjusted to 90px
  
  * **Large Tablet (≤991px):** Small laptops
    * Hero title: 3rem
    * Section padding: 60px vertical
    * Maintained desktop layout with scaled-down elements

* **Feedback Carousel Responsive Grid:**
  * **Mobile (≤767px):** 1 card at 100% width
    * Wrapper padding: 0 60px
  * **Tablet (768-991px):** 2 cards at calc((100% - 2rem) / 2) width
  * **Desktop (≥992px):** 3 cards at calc((100% - 4rem) / 3) width
  * Added `touch-action: pan-y` for better swipe gestures
  * Added `-webkit-overflow-scrolling: touch` for smooth iOS scrolling

* **Form Enhancements:**
  * Added `autocomplete="name"` to name input for autofill
  * Added `inputmode="numeric"` to pax field for numeric keyboard on mobile
  * Added `max="20"` validation to pax field
  * Font-size: 16px on mobile to prevent iOS zoom on focus
  * Responsive padding: 2rem → 1.5rem on small screens

* **HTML Meta Viewport:**
  * Updated from `width=device-width, initial-scale=1.0`
  * To `width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes`
  * Allows user zoom (accessibility requirement) while preventing excessive zoom

* **Touch Target Improvements:**
  * All interactive elements: minimum 44px × 44px (WCAG AAA standard)
  * Buttons: 48px min-height for better thumb access
  * Carousel navigation: 44px circular buttons on mobile
  * Increased button padding for easier tapping

* **Menu Carousel Mobile Optimization:**
  * Position 2 and -2 hidden on mobile (opacity: 0, pointer-events: none)
  * Shows only center + 2 adjacent items (5 total → 3 on mobile)
  * Adjusted positioning percentages for better small-screen layout
  * Responsive image sizes scale proportionally

* **Spacing & Layout:**
  * Hero content: removed right padding on tablets/mobile
  * Hero buttons: stacked vertically on mobile with full width
  * Section titles: progressive sizing (3rem → 1.6rem)
  * Menu detail: progressive padding (3rem → 1.5rem)
  * Footer: reduced spacing on mobile (60px → 40px)

* **Typography Scale:**
  * Implemented fluid typography across breakpoints
  * Hero title: 4rem → 3rem → 2.5rem → 2rem → 1.75rem
  * Body text: maintains readability at 0.95rem minimum
  * Subtitle text scaled down for mobile (1.3rem → 0.95rem)

**Benefits:**

* **Improved Mobile UX:** Better readability and interaction on all mobile devices
* **Accessible Touch Targets:** All buttons meet WCAG 2.1 AAA standards (44px minimum)
* **Better Form Experience:** Native keyboard support, no zoom issues on iOS
* **Smooth Scrolling:** Hardware-accelerated touch scrolling on iOS
* **Optimized Performance:** Reduced element sizes and simplified layouts on mobile
* **Progressive Enhancement:** Experience scales appropriately from 320px to 1920px+
* **Cross-Device Consistency:** Maintains brand identity while adapting to screen constraints

**Behavior:**

* **Navbar:** Collapses to hamburger menu on mobile (Bootstrap 5 default)
* **Feedback Carousel:** Shows 1/2/3 cards based on screen width
* **Menu Carousel:** Adapts from 5 visible items to 3 on mobile
* **Forms:** Native mobile keyboards, no zoom issues, autofill support
* **Buttons:** Easy to tap, proper spacing, readable text
* **Images:** Scale proportionally without overflow
* **Text:** Remains readable at all screen sizes without horizontal scroll

---

## Final Notes

* Match spacing, proportions, and flow from reference image
* Avoid over-animation
* Prioritize clarity and premium feel
* Keep code readable and maintainable

---

---

## Change Log

### December 28, 2025

#### Feedback Carousel Migration to Bootstrap 4

**Change:** Migrated feedback carousel from custom JavaScript implementation to Bootstrap 4 native carousel component.

**Reason:** Standardize on framework components for better maintainability and reliability.

**Implementation:**

* **HTML Changes:**
  * Replaced custom `.feedback-carousel-wrapper` structure with Bootstrap 4 `.carousel` component
  * Added `data-ride="carousel"` and `data-interval="5000"` attributes
  * Created 4 `.carousel-item` slides with Bootstrap grid (`.row` + `.col-lg-4`)
  * Each slide contains 3 feedback cards in a row
  * Added Bootstrap carousel controls (`.carousel-control-prev` and `.carousel-control-next`)
  * Removed old custom navigation buttons

* **CSS Changes:**
  * Removed custom `.feedback-carousel-wrapper`, `.feedback-carousel-track` styles
  * Removed custom `.feedback-nav` navigation button styles
  * Added Bootstrap carousel control styling with circular icons
  * Styled `.carousel-control-icon` with white background and primary color
  * Added hover effects for carousel controls
  * Maintained `.feedback-card` styling with tertiary background

* **JavaScript Changes:**
  * Completely removed custom `feedbackCarousel` object (~130 lines)
  * No custom JavaScript needed - Bootstrap handles all carousel functionality
  * Auto-rotation, sliding transitions, and navigation handled by Bootstrap

**Benefits:**

* Reduced custom code by ~150 lines
* More reliable and tested carousel behavior
* Better accessibility with built-in ARIA attributes
* Easier to maintain and debug
* Consistent with Bootstrap design patterns

**Behavior:**

* Shows 3 feedback cards at a time
* Slides one card position per navigation click
* Loops infinitely through all 6 feedback cards
* Auto-rotates every 5 seconds
* Smooth slide transitions

---

## Change Log

### December 28, 2025

#### Feedback Carousel Migration to Bootstrap 4

**Change:** Migrated feedback carousel from custom JavaScript implementation to Bootstrap 4 native carousel component.

**Reason:** Standardize on framework components for better maintainability and reliability. All changes must be documented per project requirements.

**Implementation:**

* **HTML Changes:**
  * Replaced custom `.feedback-carousel-wrapper` structure with Bootstrap 4 `.carousel` component
  * Added `data-ride="carousel"` and `data-interval="5000"` attributes for auto-play
  * Created 4 `.carousel-item` slides with Bootstrap grid (`.row` + `.col-lg-4`)
  * Each slide contains 3 feedback cards in a row
  * Added Bootstrap carousel controls (`.carousel-control-prev` and `.carousel-control-next`)
  * Removed old custom navigation buttons (`#feedbackPrev`, `#feedbackNext`)

* **CSS Changes:**
  * Removed custom `.feedback-carousel-wrapper`, `.feedback-carousel-track` styles
  * Removed custom `.feedback-nav` navigation button styles (~40 lines)
  * Added Bootstrap carousel control styling:
    * `.carousel-control-prev` and `.carousel-control-next` positioned at 50% height
    * `.carousel-control-icon` with white background, circular shape
    * Hover effects with secondary color and scale animation
  * Maintained `.feedback-card` styling with tertiary background
  * Added `#feedbackCarousel` container padding and inner padding

* **JavaScript Changes:**
  * Completely removed custom `feedbackCarousel` object (~130 lines of code)
  * Removed all custom carousel logic: init, navigation, infinite loop, cloning
  * No custom JavaScript needed - Bootstrap handles all carousel functionality
  * Auto-rotation, sliding transitions, and navigation handled by Bootstrap data attributes

**Benefits:**

* Reduced custom code by ~170 lines total
* More reliable and tested carousel behavior
* Better accessibility with built-in ARIA attributes
* Easier to maintain and debug
* Consistent with Bootstrap design patterns
* No complex state management or transition handling required

**Behavior:**

* Shows 3 feedback cards at a time on desktop
* Each navigation click moves by ONE card position (sliding window)
* Slides 5 and 6 wrap cards back to beginning for infinite loop
* Auto-rotates every 5 seconds through all 6 slides
* Smooth Bootstrap slide transitions
* Responsive design (single column on mobile)

---

## Change Log

### December 29, 2025

#### Mobile UX Enhancement - Multiple UI Improvements

**Change:** Implemented comprehensive mobile UI enhancements including hamburger menu animation, button layouts, price repositioning, carousel navigation fix, and form improvements.

**Reason:** User requested multiple mobile-specific improvements to enhance user experience and fix layout issues on mobile devices.

**Implementation:**

* **1. Hamburger to X Animation:**
  * **CSS Animation:** Added CSS transform animation for navbar toggler icon
  * **Behavior:** When `aria-expanded="true"`, hamburger icon transforms to X using CSS pseudo-elements
  * **Implementation:**
    * Removed default Bootstrap icon on expanded state
    * Added `::before` and `::after` pseudo-elements with 2px height bars
    * `::before` rotates 45deg, `::after` rotates -45deg
    * Smooth 0.3s ease transition between states
  * **Revert:** Icon automatically reverts to hamburger when menu closes (`aria-expanded="false"`)

* **2. Hero Section Button Layout (Mobile):**
  * **Desktop:** Buttons remain side by side in left column (`.d-none .d-lg-flex`)
  * **Mobile:** Buttons moved to new row below image using Bootstrap grid
  * **Grid Structure:**
    * New `.col-12 .d-lg-none` container after image column
    * `.row .g-2` with two `.col-6` columns for equal width buttons
    * Both buttons have `.w-100` class for full column width
  * **Styling:**
    * Added `.hero-buttons-mobile` class with `margin-top: 1rem`
    * Both buttons have `min-height: 50px` for equal height
    * Flex centering for text alignment

* **3. Menu Section Button Layout:**
  * **Grid Structure:** Changed from flexbox to Bootstrap grid
    * Desktop: Stacked vertically (`.col-lg-12`)
    * Mobile: Side by side (`.col-6`)
    * Used `.row .g-2` for 0.5rem gap between buttons
  * **Button Sizing:**
    * Both buttons have `.w-100` for full column width
    * `min-height: 50px` ensures equal height
    * Flex centering for text alignment
  * **Actions Container:** Simplified to `flex-direction: column` with `align-items: stretch`

* **4. Price Repositioning:**
  * **Old Location:** Inside `.dish-actions` container, below buttons
  * **New Location:** Moved to main content area, directly under dish name
  * **HTML Structure:**
    ```html
    <h3 class="dish-name">...</h3>
    <h2 class="dish-price">RM 12.90</h2>
    <p class="dish-description">...</p>
    ```
  * **Styling Updates:**
    * Reduced `margin-bottom` on `.dish-name` from 1rem to 0.5rem
    * Set `.dish-price` margin to `0 0 1rem 0` for proper spacing
    * Removed duplicate `.dish-actions` definitions from CSS
  * **Benefits:** Better visual hierarchy, price more prominent

* **5. Feedback Carousel Navigation Fix:**
  * **Issue:** Cards not scrolling properly, only moving partial distance
  * **Root Cause:** Incorrect translateX calculation not accounting for gap between cards
  * **Fix:** Updated `updateCarousel()` function
    * Calculate card width percentage including gaps
    * Convert 2rem gap to percentage based on track width
    * Apply transform: `translateX(calc(${value}% - ${index * 2}rem))`
  * **Result:** Each click now properly scrolls by one full card width + gap

* **6. Booking Form Textarea Height:**
  * **Goal:** Match textarea height to left column (Name + Pax + Date inputs)
  * **Implementation:**
    * Removed `rows="8"` attribute for dynamic sizing
    * Added `.booking-form-right` class to right column
    * Set `.booking-form-right` with `min-height: 280px`
    * Set textarea `min-height: 210px` for matching input group height
    * Added `resize: vertical` for user control
  * **Calculation:**
    * 3 inputs × 48px (approx) + 3 × 24px margin = ~210px
    * Column min-height 280px accounts for label + textarea + spacing

**Benefits:**

* **Improved Mobile UX:** Hamburger animation provides clear visual feedback
* **Better Button Accessibility:** Equal-sized buttons side by side easier to tap
* **Enhanced Visual Hierarchy:** Price positioned prominently under dish name
* **Smoother Carousel:** Fixed navigation ensures proper card scrolling
* **Balanced Forms:** Textarea height matches left column for visual harmony
* **Bootstrap Integration:** Leveraged Bootstrap grid system for responsive behavior

**Behavior:**

* **Hamburger Icon:** Smoothly animates to X when menu opens, back to hamburger when closed
* **Hero Buttons:** Display side by side below image on mobile, above description on desktop
* **Menu Buttons:** Side by side (50% width each) on mobile, stacked on desktop
* **Price Display:** Shows immediately after dish name for better readability
* **Carousel:** Each navigation click scrolls exactly one card position
* **Textarea:** Maintains consistent height with left column inputs, user-resizable

**Technical Details:**

* Used Bootstrap 5 grid classes: `.col-6`, `.col-lg-12`, `.w-100`, `.g-2`
* CSS pseudo-elements for X icon animation (no additional HTML)
* Calc() function in transform for precise carousel positioning
* Flexbox with `flex-grow-1` and `min-height` for textarea sizing
* All changes mobile-first, desktop behavior preserved

---

### December 29, 2025 (Evening)

#### Mobile Price Update Fix and Zoom Disable

**Change:** Fixed menu carousel price not updating on mobile devices and confirmed zoom is disabled for mobile.

**Reason:** User reported that when navigating through the menu carousel on mobile, the price (RM) was not changing to match the selected dish. Additionally, confirmed that double-tap zoom should be disabled on mobile for better UX.

**Implementation:**

* **Price Update Fix (JavaScript):**
  * **Issue:** Two separate price elements exist in HTML:
    * Desktop: `<h2 id="dishPrice" class="d-none d-lg-block">` (hidden on mobile)
    * Mobile: `<h2 id="dishPriceMobile" class="d-lg-none">` (hidden on desktop)
  * **Root Cause:** `updateDetails()` function in `main.js` only updated `dishPrice` element, not `dishPriceMobile`
  * **Fix:** Updated `updateDetails()` to update both price elements:
    ```javascript
    updateDetails: function() {
        const dish = this.dishes[this.currentIndex];
        document.getElementById('dishName').textContent = dish.name;
        document.getElementById('dishDescription').textContent = dish.description;
        document.getElementById('dishPrice').textContent = dish.price;
        document.getElementById('dishPriceMobile').textContent = dish.price; // Added
    }
    ```

* **Zoom Disable (Already Implemented):**
  * **Meta Viewport:** Confirmed viewport meta tag already has zoom disabled:
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    ```
  * **Properties:**
    * `maximum-scale=1.0` - Prevents pinch zoom
    * `user-scalable=no` - Disables double-tap zoom
  * **Effect:** Users cannot zoom in/out on mobile, providing fixed, app-like experience

**Benefits:**

* **Consistent Price Display:** Price now updates correctly on both mobile and desktop when carousel changes
* **Better Mobile UX:** Zoom disabled prevents accidental zoom gestures during navigation
* **Fixed App-Like Feel:** No zoom provides stable, controlled mobile experience
* **Single Source of Truth:** Both price elements always synchronized with current dish

**Behavior:**

* **Menu Carousel Navigation:** When user clicks next/previous or taps dish image:
  * Desktop price (`dishPrice`) updates immediately
  * Mobile price (`dishPriceMobile`) updates simultaneously
  * Both display same value from `dishes[currentIndex].price`
* **Mobile Zoom:** Double-tap and pinch gestures disabled, page remains at fixed scale

**Technical Details:**

* Single line addition to JavaScript: `document.getElementById('dishPriceMobile').textContent = dish.price;`
* No HTML changes needed - separate price elements already existed with proper responsive classes
* Zoom control via standard HTML5 viewport meta tag
* Both fixes ensure mobile-first experience remains consistent

---

### December 30, 2025

#### Mobile Feedback Carousel Enhancement with Pagination Dots

**Change:** Enhanced mobile feedback carousel to show cards one by one with pagination dots (indicators) and auto-slide functionality.

**Reason:** User requested that on mobile, feedback cards should be displayed one at a time with visual indicators (dots) to show which card is currently active, plus automatic sliding to the next card for better mobile UX.

**Implementation:**

* **HTML Changes:**
  * **Pagination Dots:** Added `.feedback-dots` container after carousel track
    ```html
    <div class="feedback-dots d-lg-none" id="feedbackDots">
        <span class="feedback-dot active" data-index="0"></span>
        <span class="feedback-dot" data-index="1"></span>
        <!-- ... 6 dots total for 6 feedback cards -->
    </div>
    ```
  * **Visibility:** Dots only visible on mobile using `.d-lg-none` Bootstrap class
  * **Data Attributes:** Each dot has `data-index` matching card position

* **CSS Changes:**
  * **Dot Container Styling:**
    * Flexbox layout with center justification
    * 0.5rem gap between dots
    * 2rem top margin (1.5rem on mobile)
  * **Individual Dot Styling:**
    * Circular shape: 12px × 12px (10px on mobile)
    * Semi-transparent secondary color: `rgba(139, 197, 63, 0.3)`
    * Smooth 0.3s transitions for all properties
    * Clickable with cursor pointer
    * 2px transparent border for active state
  * **Active Dot:**
    * Full secondary color: `var(--secondary)`
    * Scale transform: 1.2× for prominence
    * Visible border with secondary color
  * **Mobile Optimization:** Smaller dots (10px) at ≤991px breakpoint

* **JavaScript Enhancements:**
  * **Dot Tracking:** Added `dots` array to store dot elements
  * **Click Handlers:** Each dot clickable to jump to specific card
    ```javascript
    dot.addEventListener('click', () => {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetTimer();
    });
    ```
  * **Responsive Navigation Logic:**
    * **Mobile (< 768px):** Cycles through all 6 cards individually (0-5)
    * **Desktop (≥ 768px):** Shows 3 cards at once, cycles through 4 positions (0-3)
  * **Mobile Transform:** Simple `translateX(-100% × index)` for full-width cards
  * **Dot Update Function:** `updateDots()` adds/removes `.active` class based on `currentIndex`
  * **Auto-Rotation:** Existing 5-second auto-slide maintained, works with dots

**Benefits:**

* **Clear Navigation:** Dots provide visual feedback of position within carousel
* **Better Mobile UX:** One card at a time reduces cognitive load and scrolling
* **Interactive Control:** Users can tap dots to jump to any card directly
* **Smooth Auto-Play:** 5-second auto-rotation keeps content engaging
* **Responsive Design:** Desktop maintains 3-card view, mobile shows 1 card
* **Visual Feedback:** Active dot scales and changes color for clear indication
* **Infinite Loop:** Seamlessly cycles from last card back to first

**Behavior:**

* **Mobile View (< 768px):**
  * Shows 1 feedback card at a time, full width
  * 6 dots displayed below carousel
  * Active dot highlighted with secondary color and scale
  * Auto-advances to next card every 5 seconds
  * Arrow buttons navigate one card at a time
  * Dots clickable to jump to specific card
  * Infinite loop: card 6 → card 1

* **Desktop View (≥ 768px):**
  * Shows 3 feedback cards simultaneously
  * Dots hidden (`.d-lg-none`)
  * Navigates by sliding window (3 cards visible)
  * Arrow buttons advance one position
  * Auto-advances every 5 seconds

**Technical Details:**

* Window width check: `window.innerWidth < 768` determines mobile vs desktop behavior
* Mobile transform: Simple percentage-based (`translateX(-100% × index)`)
* Desktop transform: Calc-based with gap compensation
* Dot synchronization: `updateDots()` called after every navigation
* Auto-rotation preserved: Timer resets on manual interaction (arrow/dot click)
* Bootstrap class `.d-lg-none` hides dots on desktop without JavaScript
* No additional dependencies - pure vanilla JavaScript

---

**End of Document**
