import { useEffect, useState } from 'react';



const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    }, options);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return isIntersecting;
};

export default useIntersectionObserver;
