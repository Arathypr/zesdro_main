import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);
  const [showCursor, setShowCursor] = useState(false);

  // Intersection Observer configuration
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.5, // Change this threshold value as per your requirements
  });

  useEffect(() => {
    if (inView) {
      const intervalId = setInterval(() => {
        setShowCursor((value) => !value); // Toggle cursor on each interval
        setCurrentPosition((value) => value + 1);
        currentPositionRef.current += 1;
        if (currentPositionRef.current > textToType.length) {
          clearInterval(intervalId);
          setShowCursor(false); // Hide cursor when typing is complete
        }
      }, interKeyStrokeDurationInMs);

      return () => {
        clearInterval(intervalId);
        currentPositionRef.current = 0;
        setCurrentPosition(0);
        setShowCursor(false);
      };
    }
  }, [interKeyStrokeDurationInMs, textToType, inView]);

  const typedText = textToType.substring(0, currentPosition);
  const cursor = showCursor ? "_" : ""; // Use "|" as the cursor symbol, you can change it if you prefer another symbol

  return (
    <div ref={ref}>
      <p>{typedText + cursor}</p>
    </div>
  );
}
