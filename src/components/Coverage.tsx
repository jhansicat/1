import React from 'react';

const Coverage: React.FC = () => {
  const coverageAreas = [
    'Hitech City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Jubilee Hills',
    'Banjara Hills', 'Secunderabad', 'Begumpet', 'Ameerpet', 'Kukatpally',
    'Miyapur', 'Bachupally', 'Kompally', 'Alwal', 'Trimulgherry',
    'Uppal', 'Dilsukhnagar', 'LB Nagar', 'Vanasthalipuram', 'Hayathnagar'
  ];

  const pricingTiers = [
    {
      title: 'Local Delivery',
      distance: 'Within 5 km',
      price: '₹50',
      features: ['Same day delivery', 'Real-time tracking', 'SMS updates']
    },
    {
      title: 'City Wide',
      distance: '5-15 km', 
      price: '₹80',
      features: ['Express delivery', 'Real-time tracking', 'Call & SMS updates', 'Insurance coverage']
    },
    {
      title: 'Extended Areas',
      distance: '15-30 km',
      price: '₹120', 
      features: ['Next day delivery', 'Premium tracking', 'Call & SMS updates', 'Full insurance', 'Priority support']
    }
  ];

  const stats = [
    { number: '500+', label: 'Deliveries Completed' },
    { number: '50+', label: 'Areas Covered' },
    { number: '99%', label: 'On-Time Delivery' },
    { number: '24/7', label: 'Service Available' }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: '#f8f9fa',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            Coverage Areas & Pricing
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We serve major areas across Hyderabad with transparent pricing in Indian Rupees.
          </p>
        </div>

        {/* Pricing Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px'
          }}>
            Delivery Pricing
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  padding: '30px 20px',
                  textAlign: 'center',
                  border: index === 1 ? '2px solid #25D366' : 'none',
                  transform: index === 1 ? 'scale(1.05)' : 'scale(1)',
                  position: 'relative'
                }}
              >
                {index === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#25D366',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '10px'
                }}>
                  {tier.title}
                </h4>
                <p style={{
                  color: '#666',
                  marginBottom: '15px'
                }}>
                  {tier.distance}
                </p>
                
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#25D366',
                  marginBottom: '5px'
                }}>
                  {tier.price}
                </div>
                <p style={{
                  color: '#666',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  starting price
                </p>
                
                <div style={{ marginBottom: '25px' }}>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px',
                      color: '#555'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#25D366',
                        borderRadius: '50%',
                        marginRight: '10px'
                      }}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button style={{
                  width: '100%',
                  background: '#25D366',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#20b85c';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                }}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <div style={{
            background: '#e3f2fd',
            border: '1px solid #2196f3',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            color: '#1976d2'
          }}>
            <strong>Special Offers:</strong> Bulk deliveries (5+ items) get 15% discount. 
            Corporate accounts enjoy priority service and custom pricing.
          </div>
        </div>

        {/* Coverage Areas and Map */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '20px'
            }}>
              Areas We Serve
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px'
            }}>
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#25D366',
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></div>
                  <span style={{
                    color: '#555',
                    fontSize: '0.9rem'
                  }}>
                    {area}
                  </span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '20px',
              padding: '15px',
              background: '#e8f5e8',
              borderRadius: '8px'
            }}>
              <p style={{
                color: '#2e7d32',
                fontSize: '0.9rem'
              }}>
                <strong>Don't see your area?</strong> Contact us! We're constantly expanding our coverage and may already serve your location.
              </p>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.pexels.com/photos/7706409/pexels-photo-7706409.jpeg" 
              alt="Delivery Coverage Map" 
              style={{
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'rgba(37, 211, 102, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '10px'
                }}>
                  🚚
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>
                  Hyderabad Wide
                </h4>
                <p style={{ fontSize: '1rem' }}>
                  Fast & Reliable Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '20px'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#25D366',
                marginBottom: '5px'
              }}>
                {stat.number}
              </div>
              <p style={{
                color: '#666',
                fontWeight: '500'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coverage;