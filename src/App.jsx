import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import Carousel from "./Carousel";

const Body = styled.div`
  height: fit-content;
  width: 100%;
  background: black;
`;

function App() {
  return (
    <Body>
      <Carousel>
        <CarouselItem bg="green" title="green">
          <h1>1</h1>
        </CarouselItem>
        <CarouselItem bg="red" title="red">
          <h1>2</h1>
        </CarouselItem>
        <CarouselItem bg="yellow" title="yellow">
          <h1>3</h1>
        </CarouselItem>
        <CarouselItem bg="blue" title="blue">
          <div
            style={{
              height: "200vh",
            }}
          >
            4
          </div>
        </CarouselItem>
        <CarouselItem bg="pink" title="pink">
          <h1>5</h1>
        </CarouselItem>
      </Carousel>
    </Body>
  );
}

export default App;
