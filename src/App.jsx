import React, { useState, useEffect } from 'react';
import './App.css';

// Loader Component
const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <h2 className="loader-text">AI Vision</h2>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">◆</span>
            <span>AI VISION</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">AI-Powered Solutions</div>
          <h1 className="hero-title">
            The Future of
            <br />
            <span className="gradient-text">Artificial Intelligence</span>
          </h1>
          <p className="hero-description">
            Enterprise-grade AI solutions that transform businesses through intelligent automation,
            machine learning, and predictive analytics.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Your Journey</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>AI Models Deployed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Leading the AI Revolution</h2>
            <p className="section-description">
              We are a team of AI specialists, data scientists, and engineers dedicated to pushing 
              the boundaries of what's possible with artificial intelligence. Our mission is to make 
              advanced AI accessible to businesses of all sizes.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Cutting-Edge Technology</h4>
                  <p>Latest AI frameworks and algorithms</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Proven Results</h4>
                  <p>Track record of successful implementations</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div>
                  <h4>Enterprise Security</h4>
                  <p>Bank-level encryption and compliance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card card-1">
              <div className="card-icon">🤖</div>
              <h4>Machine Learning</h4>
            </div>
            <div className="visual-card card-2">
              <div className="card-icon">🧠</div>
              <h4>Neural Networks</h4>
            </div>
            <div className="visual-card card-3">
              <div className="card-icon">📊</div>
              <h4>Data Analytics</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: '🎯',
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors with advanced machine learning models.',
      features: ['Time Series Analysis', 'Customer Behavior', 'Risk Assessment']
    },
    {
      icon: '🔍',
      title: 'Computer Vision',
      description: 'Extract insights from images and video with deep learning.',
      features: ['Object Detection', 'Image Classification', 'Face Recognition']
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      description: 'Understand and process human language at scale.',
      features: ['Sentiment Analysis', 'Text Generation', 'Language Translation']
    },
    {
      icon: '🤖',
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered systems.',
      features: ['Process Automation', 'Smart Routing', 'Decision Making']
    },
    {
      icon: '📈',
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights.',
      features: ['Data Visualization', 'KPI Tracking', 'Performance Analytics']
    },
    {
      icon: '🛡️',
      title: 'AI Security',
      description: 'Protect your systems with AI-driven threat detection.',
      features: ['Anomaly Detection', 'Fraud Prevention', 'Cyber Defense']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our AI Services</h2>
          <p className="section-description">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const projects = [
    {
      category: 'Healthcare',
      title: 'Medical Diagnosis System',
      description: 'AI-powered diagnostic tool with 95% accuracy',
      metrics: ['95% Accuracy', '10k+ Diagnoses', '50% Faster']
    },
    {
      category: 'Finance',
      title: 'Algorithmic Trading Platform',
      description: 'Real-time market analysis and automated trading',
      metrics: ['$2M+ Traded', '89% Win Rate', '24/7 Active']
    },
    {
      category: 'Retail',
      title: 'Customer Analytics Engine',
      description: 'Personalized recommendations and behavior prediction',
      metrics: ['30% Sales ↑', '2M+ Users', '85% Accuracy']
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="portfolio-tabs">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {project.category}
            </button>
          ))}
        </div>
        <div className="portfolio-content">
          <div className="project-details">
            <h3>{projects[activeTab].title}</h3>
            <p>{projects[activeTab].description}</p>
            <div className="project-metrics">
              {projects[activeTab].metrics.map((metric, i) => (
                <div key={i} className="metric-badge">{metric}</div>
              ))}
            </div>
            <button className="btn-secondary">View Case Study</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      text: 'AI Vision transformed our business operations. The predictive analytics model increased our efficiency by 40% in just three months.',
      author: 'Sarah Chen',
      role: 'CEO, TechCorp Industries',
      rating: 5
    },
    {
      text: 'The level of expertise and professionalism is unmatched. They delivered a complex NLP solution that exceeded all our expectations.',
      author: 'Michael Rodriguez',
      role: 'CTO, DataFlow Systems',
      rating: 5
    },
    {
      text: 'Working with AI Vision has been a game-changer. Their computer vision solution reduced our quality control time by 60%.',
      author: 'Emily Thompson',
      role: 'Director of Operations, ManufacturePro',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.author[0]}</div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Build Something Amazing</h2>
            <p className="section-description">
              Ready to transform your business with AI? Our team is here to help you 
              navigate your AI journey from concept to deployment.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>contact@aivision.ai</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input type="email" placeholder="Email Address" className="form-input" />
            <input type="text" placeholder="Company" className="form-input" />
            <textarea placeholder="Tell us about your project" rows="4" className="form-input"></textarea>
            <button onClick={handleSubmit} className="btn-primary full-width">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">◆</span>
              <span>AI VISION</span>
            </div>
            <p>Pioneering the future of artificial intelligence with innovative solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Machine Learning</a></li>
              <li><a href="#services">Computer Vision</a></li>
              <li><a href="#services">NLP Solutions</a></li>
              <li><a href="#services">AI Consulting</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AI Vision. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;