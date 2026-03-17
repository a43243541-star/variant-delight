
# Молодежный штаб СГЮА — React Implementation Plan

## Overview
Convert the uploaded HTML design for a Russian law academy youth headquarters website into a fully functional, responsive React application using Tailwind CSS. The site features a bold blue/dark theme with Manrope + Caveat fonts.

## Pages & Sections

### 1. Header (Fixed Navigation)
- Floating pill-shaped navbar with glass-morphism effect
- Logo "МШ СГЮА", nav links (О штабе, Об Ассоциации, Обучения, Фотографии)
- "Вступить в штаб" CTA button
- Mobile hamburger menu (hidden on desktop, replaces nav on small screens)

### 2. Hero Section
- Full-viewport with background image, blue gradient overlay
- Animated headline with handwritten "юридическую" accent (Caveat font)
- Two CTAs: "Присоединиться к команде" (primary) and "Узнать о событиях" (outline)
- Fade-up entrance animations

### 3. Stats Section
- Overlapping card lifted above hero (-60px margin)
- Two-column layout: descriptive text left, 4 stat counters right (500+, 42, 10k, 85%)
- Blue left-border accent on each stat box

### 4. Association Section
- Two-column: image with hover-reveal effect (grayscale → color) + descriptive text
- "Наследие" tag, heading, paragraphs with handwritten accent

### 5. Training Carousel
- Dark background section with horizontally scrollable course cards
- 4 cards: Legal Design, Мастерство судебной речи, Госсектор vs Консалтинг, Бизнес-завтрак
- Pill tags with different colors per category

### 6. Mentors Section
- 3-column grid of mentor cards with avatar, name, and role
- Hover effect with subtle shadow

### 7. Photo Gallery
- Filter buttons (Все, Обучения, Неформальные встречи, Форумы) with active state toggling
- Masonry-style grid (3 cols → 2 → 1 responsive)
- Hover overlay with event title

### 8. Footer
- 4-column grid: brand info, navigation links, contacts (with VK/Telegram), email subscription form
- Bottom bar with copyright

### 9. Side Toolbar
- Fixed right-side decorative toolbar (hidden on tablet/mobile)

## Design System
- **Fonts**: Manrope (UI) + Caveat (handwritten accents) via Google Fonts
- **Colors**: Vibrant blue (#0062FF), Deep blue (#0A1128), Accent red (#FF2A4D), Off-white (#F4F7FB)
- **Animations**: CSS fade-up on hero elements, hover transitions on cards/images
- **Responsive**: 3 breakpoints — desktop, tablet (1024px), mobile (768px)
