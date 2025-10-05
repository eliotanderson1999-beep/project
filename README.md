# AI Vision - Professional AI Company Website

A modern, dark-themed website for an AI-based company built with React and Vite. Features a stunning lavender color palette with professional animations and responsive design.

![AI Vision](https://img.shields.io/badge/AI-Vision-8B7FD8?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)

## 🎨 Features

### Design & UI
- **Dark Theme** - Professional dark color scheme with lavender accents
- **Lavender Color Palette** - Primary (#8B7FD8), Secondary (#B4A5E8), Light (#D4CEEB)
- **Glassmorphism Effects** - Modern frosted glass navigation bar
- **Smooth Animations** - Professional entrance and hover animations
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

### Sections
1. **Animated Loader** - Triple rotating rings with fade-out effect
2. **Navigation Bar** - Fixed navbar with scroll-triggered glassmorphism
3. **Hero Section** - Bold typography with orbital animations and stats
4. **About Section** - Company introduction with floating feature cards
5. **Services Section** - 6 comprehensive AI service offerings
6. **Portfolio Section** - Tabbed case studies with project metrics
7. **Testimonials** - Client reviews with star ratings
8. **Contact Section** - Professional contact form with company details
9. **Footer** - Multi-column footer with links and social media

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards and buttons
- Tab switching for portfolio
- Animated statistics counter
- Gradient text effects
- Custom scrollbar styling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or create your Vite React project**
```bash
npm create vite@latest ai-vision -- --template react
cd ai-vision
```

2. **Install dependencies**
```bash
npm install
```

3. **Project Structure**
```
ai-vision/
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── App.css          # Complete styling
│   └── main.jsx         # Entry point
├── public/
├── index.html
├── package.json
└── README.md
```

4. **Add the code**
- Copy the React component code to `src/App.jsx`
- Copy the CSS code to `src/App.css`

5. **Run the development server**
```bash
npm run dev
```

6. **Build for production**
```bash
npm run build
```

## 📁 File Structure

```
src/
├── components/         # (Optional) Split components here
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx            # Main page (all components imported)
├── App.css            # Complete styling
└── main.jsx           # Entry point
```

## 🎯 Color Palette

```css
--primary: #8B7FD8      /* Lavender */
--secondary: #B4A5E8    /* Light Lavender */
--lavender-light: #D4CEEB /* Very Light Lavender */
--bg-dark: #0A0A0F      /* Main Background */
--bg-darker: #050508    /* Darker Background */
--bg-card: #141419      /* Card Background */
--text-primary: #FFFFFF /* White Text */
--text-secondary: #A0A0B8 /* Gray Text */
```

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `App.css`:
```css
:root {
  --primary: #8B7FD8;
  --secondary: #B4A5E8;
  /* Add your custom colors */
}
```

### Adding Sections
1. Create a new component in `App.jsx`
2. Add corresponding styles in `App.css`
3. Import and place in the main App component

### Modifying Content
- Update text content directly in `App.jsx`
- Modify service offerings in the `services` array
- Change portfolio projects in the `projects` array
- Update testimonials in the `testimonials` array

## 📱 Responsive Breakpoints

```css
Desktop:  > 968px
Tablet:   640px - 968px
Mobile:   < 640px
```

## ⚡ Performance

- Lazy loading ready
- Optimized animations
- Minimal dependencies
- Fast initial load
- Smooth 60fps animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Credits

**Designed & Developed by Claude (Anthropic)**
- AI Assistant: Claude Sonnet 4.5
- Architecture: Modern React with Vite
- Design System: Custom dark theme with lavender palette
- Animation Framework: Pure CSS animations
- Responsive Design: Mobile-first approach

**Created for:** AI-based company website showcase
**Date:** October 2025
**Version:** 1.0.0

---

### Special Thanks
- **Anthropic** - For Claude AI capabilities
- **React Team** - For the amazing framework
- **Vite Team** - For the blazing fast build tool
- **You** - For using this template! 🎉

## 🤝 Contributing

Feel free to fork, modify, and use this template for your projects!

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact via the website form
- Email: support@example.com

## 🔮 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Blog section
- [ ] Case study detail pages
- [ ] Team member profiles
- [ ] Live chat integration
- [ ] Animation on scroll triggers
- [ ] Advanced form validation

---

**Made with ❤️ and AI by Claude**
