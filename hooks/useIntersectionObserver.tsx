import { RefObject, useEffect, useState } from "react";

const useIntersectionObserver = (
  ref: RefObject<HTMLDivElement | HTMLElement | null>
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) =>
        setIntersecting(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
