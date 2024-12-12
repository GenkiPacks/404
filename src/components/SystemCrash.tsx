import React from 'react';

const SystemCrash = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter(c => (c + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 text-sm font-mono">
      <div className="glitch">
        SYSTEM_PROCESS: {counter}%
      </div>
      <div>
        CPU_LOAD: CRITICAL
      </div>
    </div>
  );
};

export default SystemCrash;