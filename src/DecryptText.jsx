import React, { useState, useCallback, useRef, useEffect } from 'react';

const DecryptText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  
  const handleMouseEnter = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iterations = 0;
    
    try {
      intervalRef.current = setInterval(() => {
        setDisplayText(prevText => 
          text.split('').map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );
        
        if (iterations >= text.length) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsAnimating(false);
        }
        
        iterations += 1/3;
      }, 30);
    } catch (error) {
      console.error('Error in decrypt animation:', error);
      setIsAnimating(false);
    }
  }, [isAnimating, text, chars]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <h1 
      className={className} 
      onMouseEnter={handleMouseEnter}
      style={{ cursor: 'pointer' }}
    >
      {displayText}
    </h1>
  );
};

export default DecryptText;