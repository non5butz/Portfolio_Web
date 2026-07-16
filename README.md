# Tsujita Nozomi - Portfolio

Welcome to the repository for my personal portfolio website.

## 🎨 Concept

**"より良い体験を、一歩ずつ。 / Designing Better Experiences."**

This portfolio embodies my core philosophy as a UI/UX Designer and Web Engineer. Driven by an extensive and diverse professional background, my expertise in Human-Centered Design (HCD) is deeply rooted in practical, field-tested implementation. This strong hands-on foundation is further elevated by graduate-level research bridging business administration and information engineering at JAIST. This website itself serves as a proof-of-concept—seamlessly synthesizing technology, design, and business strategy with aesthetic elegance and robust execution.

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **3D Graphics:** Spline (`@splinetool/react-spline`)
- **Icons:** Lucide React
- **Fonts:** Geist, Geist Mono, and Noto Serif JP (via Next.js Font Optimization)

## ✨ UI/UX & Design Features

### 1. Thematic Visuals

- **Background:** Set to a precise `lab(98.26 0 0)` to ensure a crisp, pristine canvas across different displays.
- **Accents:** A signature gradient block `linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)`. This pairs a thoughtful blue (representing logic, code, and evidence) with a warm blush (representing human-centered empathy and design).
- **Typography Integration:** The main catchphrase elegantly utilizes text-clipping on the gradient background to highlight the harmony between theory and execution.

### 2. Immersive 3D Experience

The Hero section utilizes a dynamically loaded 3D Spline background.
To ensure optimal performance and appropriate art direction:

- **SSR Optimization:** Spline components are loaded using Next.js `dynamic` imports with `ssr: false`, showing a resilient loading state to improve Initial Page Load.
- **Responsive 3D Assets:** A viewport resizing listener automatically toggles between a Desktop-specific Spline scene and a Mobile-specific Spline scene. This ensures the 3D elements frame the content perfectly regardless of device.

### 3. Progressive Disclosure

- The initial view establishes credibility with an academic, clean layout displaying the core statement.
- "Scroll" indicators with subtle `animate-bounce` guide the user seamlessly down to the deeper philosophy (`#philosophy`) and works sections.

## 📂 Project Structure

This project uses the robust **Next.js App Router** structure.

```text
/
├── app/
│   ├── layout.tsx                # Base HTML/Body structure, Metadata, Fonts
│   ├── page.tsx                  # Root page component
│   └── globals.css               # Tailwind CSS v4 imports
│
├── components/
│   └── portfolio/
│       ├── hero-section.tsx      # Main Hero section containing Spline logic and styling
│       ├── philosophy-section.tsx
│       ├── works-section.tsx
│       └── contact-section.tsx
│
├── data/                         # Content and documentation
│
├── public/
│   └── images/                   # Image assets for profile and projects
│
└── package.json / tsconfig.json  # Environment and typescript configurations
```
