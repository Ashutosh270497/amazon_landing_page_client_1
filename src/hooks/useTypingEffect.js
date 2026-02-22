import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string[]} texts - Array of texts to cycle through
 * @param {number} typingSpeed - Speed of typing in ms
 * @param {number} pauseDuration - Pause duration before deleting in ms
 */
const useTypingEffect = (texts, typingSpeed = 80, pauseDuration = 2000) => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex <= currentText.length) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex++;
      } else if (!isDeleting && charIndex > currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, pauseDuration);
      }

      if (isDeleting && charIndex >= 0) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex--;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % texts.length);
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [textIndex, texts, typingSpeed, pauseDuration]);

  return typedText;
};

export default useTypingEffect;
