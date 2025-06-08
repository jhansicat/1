import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, Weight, Send, User } from 'lucide-react';

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
    <section id="booking" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Brand Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-green-600 to-green-700 text-white p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                    <Package className="h-16 w-16 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">NXT Delivery</h2>
                  <p className="text-lg font-light leading-relaxed">
                    Driven by Safety<br />
                    Delivered with Speed<br />
                    <span className="font-semibold">Fast. Reliable. Secure.</span>
                  </p>
                </motion.div>

                {/* Service Images */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                  <img 
                    src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg" 
                    alt="Delivery Service 1" 
                    className="w-full h-16 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src="https://images.pexels.com/photos/4391469/pexels-photo-4391469.jpeg" 
                    alt="Delivery Service 2" 
                    className="w-full h-16 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg" 
                    alt="Delivery Service 3" 
                    className="w-full h-16 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Form Section */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-green-500 pb-3">
                    Book Your Delivery Now
                  </h3>

                  <div className="space-y-6">
                    <div className="relative">
                      <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-2">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        id="from"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="Enter pickup location"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-2">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        Drop Location
                      </label>
                      <input
                        type="text"
                        id="to"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="Enter drop location"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="items" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Package className="inline h-4 w-4 mr-1" />
                        Items Description
                      </label>
                      <input
                        type="text"
                        id="items"
                        name="items"
                        value={formData.items}
                        onChange={handleInputChange}
                        placeholder="List the items to be delivered"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Weight className="inline h-4 w-4 mr-1" />
                        Total Weight (kg)
                      </label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="Enter total weight"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={sendToWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send to WhatsApp</span>
                    </motion.button>

                    {/* Founder Section */}
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 mt-6">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Founder: Amgoth Praveen</p>
                        <p className="text-sm text-gray-600">Committed to Excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForm;