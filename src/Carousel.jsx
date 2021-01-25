import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

function Carousel(props) {
  const wrapperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (index) => {
    wrapperRef.current.scrollTo({
      behavior: "smooth",
      top: index * wrapperRef.current?.offsetHeight || 0,
    });
  };

  const getCurrentIndex = () => {
    if (!wrapperRef.current) return 0;
    return Math.floor(
      wrapperRef.current.scrollTop / wrapperRef.current.offsetHeight
    );
  };

  useEffect(() => {
    const node = wrapperRef.current;

    const handler = () => {
      const index = getCurrentIndex();
      if (currentIndex !== index) setCurrentIndex(index);
    };

    wrapperRef.current.addEventListener("scroll", handler);

    return () => node.removeEventListener("scroll", handler);
  }, [currentIndex]);

  return (
    <Wrapper ref={wrapperRef}>{props.children}</Wrapper>

    // <div>
    //   { {children.map((_, index) => (
    //     <button
    //       style={{
    //         padding: "10px 15px",
    //         backgroundColor: currentIndex === index ? "yellow" : "white",
    //       }}
    //       key={index}
    //       onClick={() => handleScroll(index)}
    //     >
    //       {index}
    //     </button>
    //   ))}
    // </div> }
  );
}

export default Carousel;
