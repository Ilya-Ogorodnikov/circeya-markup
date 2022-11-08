import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elRef.current;

    if (element) {
      const onWheel = (event: WheelEvent) => {
        if (event.deltaY === 0) return;

        if (
          !(element.scrollLeft === 0 && event.deltaY < 0) &&
          !(
            element.scrollWidth -
              element.clientWidth -
              Math.round(element.scrollLeft) ===
              0 && event.deltaY > 0
          )
        ) {
          event.preventDefault();
        }

        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
        });
      };
      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return elRef;
};
