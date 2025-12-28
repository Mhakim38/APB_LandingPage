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

* **Bootstrap 4 Native Carousel**: Uses Bootstrap 4's `.carousel` component
  * `data-ride="carousel"` for auto-rotation
  * `data-interval="5000"` for 5-second intervals
* **Sliding Window**: 4 slides total, each showing 3 feedback cards
  * Slide 1: Cards 1, 2, 3 (Ahmad, Sarah, Muhamad)
  * Slide 2: Cards 2, 3, 4 (Sarah, Muhamad, Nurul)
  * Slide 3: Cards 3, 4, 5 (Muhamad, Nurul, Tan)
  * Slide 4: Cards 4, 5, 6 (Nurul, Tan, Siti)
  * Creates sliding window effect with overlapping cards
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
* Slides show overlapping content (sliding window pattern)
* Loops infinitely through all 4 slides automatically
* Auto-rotates every 5 seconds
* Smooth Bootstrap slide transitions
* Responsive design (single column on mobile)

---

**End of Document**
