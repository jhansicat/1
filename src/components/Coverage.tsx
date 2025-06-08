import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Truck, IndianRupee } from 'lucide-react';
import CountUp from 'react-countup';

const Coverage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      price: 50,
      features: ['Same day delivery', 'Real-time tracking', 'SMS updates']
    },
    {
      title: 'City Wide',
      distance: '5-15 km',
      price: 80,
      features: ['Express delivery', 'Real-time tracking', 'Call & SMS updates', 'Insurance coverage']
    },
    {
      title: 'Extended Areas',
      distance: '15-30 km',
      price: 120,
      features: ['Next day delivery', 'Premium tracking', 'Call & SMS updates', 'Full insurance', 'Priority support']
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Deliveries Completed' },
    { number: 50, suffix: '+', label: 'Areas Covered' },
    { number: 99, suffix: '%', label: 'On-Time Delivery' },
    { number: 24, suffix: '/7', label: 'Service Available' }
  ];

  return (
    <section id="coverage" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Coverage Areas & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve major areas across Hyderabad with transparent pricing and reliable service.
          </p>
        </motion.div>

        {/* Pricing Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Delivery Pricing
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  index === 1 ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{tier.title}</h4>
                  <p className="text-gray-600 mb-4">{tier.distance}</p>
                  
                  <div className="flex items-center justify-center mb-6">
                    <IndianRupee className="h-8 w-8 text-green-600" />
                    <span className="text-4xl font-bold text-gray-800">{tier.price}</span>
                    <span className="text-gray-600 ml-2">starting</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center"
          >
            <p className="text-blue-800">
              <strong>Special Offers:</strong> Bulk deliveries (5+ items) get 15% discount. 
              Corporate accounts enjoy priority service and custom pricing.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {coverageAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Don't see your area?</strong> Contact us! We're constantly expanding our coverage and may already serve your location.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/7706409/pexels-photo-7706409.jpeg" 
              alt="Delivery Coverage Map" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Truck className="h-16 w-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Hyderabad Wide</h4>
                <p className="text-lg">Fast & Reliable Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;