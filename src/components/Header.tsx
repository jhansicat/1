import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: '0',
      zIndex: '50'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              background: '#25D366',
              padding: '8px',
              borderRadius: '8px'
            }}>
              <span style={{
                fontSize: '1.5rem',
                color: 'white'
              }}>
                🚚
              </span>
            </div>
            <div>
              <h1 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
              }}>
                NXT Delivery
              </h1>
              <p style={{
                fontSize: '0.7rem',
                color: '#666',
                margin: '0'
              }}>
                Fast. Reliable. Secure.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{
            display: window.innerWidth <= 768 ? 'none' : 'flex',
            gap: '30px'
          }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: '#555',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#25D366';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#555';
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span style={{ fontSize: '1.5rem' }}>✕</span>
            ) : (
              <span style={{ fontSize: '1.5rem' }}>☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            paddingBottom: '15px',
            borderTop: '1px solid #eee',
            paddingTop: '15px'
          }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '8px 0',
                  color: '#555',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#25D366';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#555';
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;