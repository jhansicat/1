import React from 'react';
import Header from './components/Header';
import DeliveryForm from './components/DeliveryForm';
import Coverage from './components/Coverage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <DeliveryForm />
        <Coverage />
      </main>
    </div>
  );
}

export default App;