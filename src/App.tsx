import React from 'react';
import Header from './components/Header';
import DeliveryForm from './components/DeliveryForm';
import Coverage from './components/Coverage';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Header />
      <main>
        <DeliveryForm />
        <Coverage />
      </main>
    </div>
  );
}

export default App;