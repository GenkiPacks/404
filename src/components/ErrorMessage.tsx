import React from 'react';

interface ErrorMessageProps {
  message: string;
  delay: number;
}

const ErrorMessage = ({ message, delay }: ErrorMessageProps) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return visible ? (
    <div className="error-text my-2">
      <span className="text-red-500">[ERROR]</span> {message}
    </div>
  ) : null;
};

export default ErrorMessage;