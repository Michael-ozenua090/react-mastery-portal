// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Speta Academy</span>
          </div>
          <p className="footer-mission">
            Empowering the next generation of tech professionals through modern, project-based education.
          </p>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>
          <a href="#">Curriculum</a>
          <a href="#">Instructor</a>
          <a href="#">Community</a>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Speta Academy. Built by Michael Oshovue.</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
