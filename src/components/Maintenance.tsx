import React from 'react';

const MaintenancePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Estamos em Manutenção</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Estamos trabalhando para melhorar nosso site. Por favor, volte mais tarde.
      </p>
      <div style={{ fontSize: '1rem', color: '#6c757d' }}>
        &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default MaintenancePage;
