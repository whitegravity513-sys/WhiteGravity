import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2500,
  textClass = '',
  cursorClass = 'bg-emerald-300'
}) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center align-middle min-w-[20px]">
      <span className={textClass}>
        {text || '\u200B'}
      </span>
      <span
        className={`animate-pulse h-[0.95em] w-[4px] sm:w-[5px] ml-2 inline-block rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] ${cursorClass}`}
        style={{ WebkitTextFillColor: 'initial', color: 'initial' }}
      />
    </span>
  );
}
