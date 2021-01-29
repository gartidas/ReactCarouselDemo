import styled from "styled-components";

const CarouselItemWrapper = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  scroll-snap-align: start;
  overflow-y: auto;
  background-color: ${(props) => props.bg};

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function CarouselItem(props) {
  return (
    <CarouselItemWrapper bg={props.bg}>{props.children}</CarouselItemWrapper>
  );
}

export default CarouselItem;
