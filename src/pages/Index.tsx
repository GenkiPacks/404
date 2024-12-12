import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import SystemCrash from '../components/SystemCrash';

const Index = () => {
  const [showButton, setShowButton] = React.useState(true);

  const handleCrash = () => {
    setShowButton(false);
    console.error("FATAL ERROR: System crash initiated");
  };

  return (
    <div className="min-h-screen bg-black error-screen">
      <div className="scanline" />
      
      <div className="container mx-auto p-8">
        {showButton ? (
          <button
            onClick={handleCrash}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-8"
          >
            INITIATE SYSTEM CRASH
          </button>
        ) : (
          <div className="space-y-2">
            <ErrorMessage 
              message="FATAL ERROR: System crash initiated at 0x000000" 
              delay={0} 
            />
            <ErrorMessage 
              message="CRITICAL: Memory allocation failed" 
              delay={1000} 
            />
            <ErrorMessage 
              message="WARNING: Stack overflow imminent" 
              delay={2000} 
            />
            <ErrorMessage 
              message="ERROR: Null reference encountered at line 48" 
              delay={3000} 
            />
            <ErrorMessage 
              message="SYSTEM: CPU temperature exceeding safe limits" 
              delay={4000} 
            />
            <ErrorMessage 
              message="FATAL: Unable to recover system state" 
              delay={5000} 
            />
            <ErrorMessage 
              message="ERROR: Infinite loop detected in main thread" 
              delay={6000} 
            />
            <ErrorMessage 
              message="CRITICAL: System shutdown imminent..." 
              delay={7000} 
            />
          </div>
        )}
      </div>
      
      <SystemCrash />
    </div>
  );
};

export default Index;