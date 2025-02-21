import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel className="my-2">
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://www.shutterstock.com/shutterstock/photos/1539636704/display_1500/stock-vector-smartphone-surrounded-by-shopping-cart-shopping-basket-shopping-bag-clothes-high-heel-and-1539636704.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3 className="fw-bold">Exclusive Offers</h3>
          <p className="fw-bold">Get up to 50% off on selected items!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://www.shutterstock.com/shutterstock/photos/1352034068/display_1500/stock-photo-concept-of-product-categories-small-consumer-electronics-fly-out-of-the-box-d-render-on-grey-1352034068.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3 className="fw-bold">New Arrivals</h3>
          <p className="fw-bold">Explore our latest collection of products.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://as2.ftcdn.net/v2/jpg/02/00/85/25/1000_F_200852549_6BF6a8h1zfn4FzdEaBVabrkM17HKmQaj.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3 className="fw-bold">Best Sellers</h3>
          <p className="fw-bold">Check out our most popular products this month.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
