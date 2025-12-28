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

**End of Document**
