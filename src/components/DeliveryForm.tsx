import React, { useState } from 'react';

const DeliveryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    items: '',
    weight: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToWhatsApp = () => {
    const { from, to, items, weight } = formData;

    if (!from || !to || !items || !weight) {
      alert('Please fill in all fields.');
      return;
    }

    const message = `*NXT Delivery Request*\n\nFrom: ${from}\nTo: ${to}\nItems: ${items}\nWeight: ${weight} kg`;
    const encodedMsg = encodeURIComponent(message);
    const phone = '9391332253';

    window.open(`https://wa.me/91${phone}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflowX: 'hidden',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        width: '90%',
        maxWidth: '900px',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
      }}>
        {/* Brand Section */}
        <div style={{
          width: window.innerWidth <= 768 ? '100%' : '40%',
          background: '#075e54',
          color: 'white',
          padding: '5% 3%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '5%', maxWidth: '100%' }}>
            <img 
              src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg" 
              alt="NXT Delivery Logo" 
              style={{
                width: '100%',
                maxWidth: '150px',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </div>
          <p style={{
            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
            lineHeight: '1.5',
            fontWeight: '300',
            marginTop: '10px'
          }}>
            Driven by Safety Delivered with speed.<br />
            Fast. Reliable. Secure.
          </p>
        </div>

        {/* Form Section */}
        <div style={{
          width: window.innerWidth <= 768 ? '100%' : '60%',
          padding: '5% 4%',
          overflowY: 'auto'
        }}>
          <h2 style={{
            color: '#333',
            marginBottom: '20px',
            fontWeight: '600',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            borderBottom: '2px solid #25D366',
            paddingBottom: '10px'
          }}>
            NXT Delivery Book now
          </h2>

          <div style={{ marginBottom: '15px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '500',
              color: '#555',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              From:
            </label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="Enter pickup location"
              style={{
                width: '100%',
                padding: 'clamp(8px, 2vw, 12px)',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#25D366';
                e.target.style.boxShadow = '0 0 5px rgba(37, 211, 102, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '500',
              color: '#555',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              To:
            </label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="Enter drop location"
              style={{
                width: '100%',
                padding: 'clamp(8px, 2vw, 12px)',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#25D366';
                e.target.style.boxShadow = '0 0 5px rgba(37, 211, 102, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '500',
              color: '#555',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              Items:
            </label>
            <input
              type="text"
              name="items"
              value={formData.items}
              onChange={handleInputChange}
              placeholder="List the items"
              style={{
                width: '100%',
                padding: 'clamp(8px, 2vw, 12px)',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#25D366';
                e.target.style.boxShadow = '0 0 5px rgba(37, 211, 102, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '500',
              color: '#555',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              Weight (in kg):
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Enter total weight"
              style={{
                width: '100%',
                padding: 'clamp(8px, 2vw, 12px)',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#25D366';
                e.target.style.boxShadow = '0 0 5px rgba(37, 211, 102, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            onClick={sendToWhatsApp}
            style={{
              width: '100%',
              padding: 'clamp(10px, 2vw, 14px)',
              backgroundColor: '#25D366',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              marginTop: '10px',
              marginBottom: '15px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#20b85c';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366';
            }}
          >
            Send to WhatsApp
          </button>

          {/* Founder Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '10px',
            marginBottom: '15px',
            backgroundColor: '#f1f1f1',
            padding: '10px',
            borderRadius: '6px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
              alt="Founder" 
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #25D366'
              }}
            />
            <p style={{
              fontWeight: '500',
              color: '#333',
              fontSize: '0.95rem'
            }}>
              Founder: Amgoth Praveen
            </p>
          </div>

          {/* Service Images */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2%'
          }}>
            <img 
              src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg" 
              alt="Delivery Service 1" 
              style={{
                width: '32%',
                height: 'clamp(50px, 10vw, 80px)',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
            <img 
              src="https://images.pexels.com/photos/4391469/pexels-photo-4391469.jpeg" 
              alt="Delivery Service 2" 
              style={{
                width: '32%',
                height: 'clamp(50px, 10vw, 80px)',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
            <img 
              src="https://images.pexels.com/photos/7706409/pexels-photo-7706409.jpeg" 
              alt="Delivery Service 3" 
              style={{
                width: '32%',
                height: 'clamp(50px, 10vw, 80px)',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;