/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, RefObject } from "react";

export const useVisible = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer:IntersectionObserver = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};
