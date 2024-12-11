import { useEffect } from "react";

const useCustomScrollSpeed = (scrollSpeed = 0.5) => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        window.scrollBy({
          top: event.deltaY * scrollSpeed,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll, { passive: false });
    };
  }, [scrollSpeed]);
};

export default useCustomScrollSpeed;
