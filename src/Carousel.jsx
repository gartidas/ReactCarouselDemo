import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const DotsWrapper = styled.div`
  position: fixed;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.button`
  padding: 1em;
  border-radius: 50%;
  border: 0.3em solid #5e5c5c;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.bg};

  :hover {
    background-color: gray;
  }
`;

function Carousel(props) {
  const carouselWrapperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (index) => {
    carouselWrapperRef.current.scrollTo({
      behavior: "smooth",
      top: index * carouselWrapperRef.current?.offsetHeight || 0,
    });
  };

  const getCurrentIndex = () => {
    if (!carouselWrapperRef.current) return 0;
    return Math.floor(
      carouselWrapperRef.current.scrollTop /
        carouselWrapperRef.current.offsetHeight
    );
  };

  useEffect(() => {
    const node = carouselWrapperRef.current;

    const handler = () => {
      const index = getCurrentIndex();
      if (currentIndex !== index) setCurrentIndex(index);
    };

    carouselWrapperRef.current.addEventListener("scroll", handler);

    return () => node.removeEventListener("scroll", handler);
  }, [currentIndex]);

  return (
    <CarouselWrapper ref={carouselWrapperRef}>
      {props.children}
      <DotsWrapper>
        {props.children.map((_, index) => (
          <Dot
            bg={currentIndex === index ? "white" : "transparent"}
            key={index}
            onClick={() => handleScroll(index)}
          ></Dot>
        ))}
      </DotsWrapper>
    </CarouselWrapper>
  );
}

export default Carousel;
