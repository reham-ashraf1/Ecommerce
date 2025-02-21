// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productSlice";
// import { addToCart } from "../redux/slices/cartSlice";


// const Products = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleAddToCart = (product) => {
//     console.log("Adding to cart:", product);
//     dispatch(addToCart(product));
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mt-5">
//       <h2>Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-4">
//             <div className="card">
//               <img src={product.image} className="card-img-top" alt={product.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">${product.price}</p>
//                 <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productSlice";
// import { addToCart } from "../redux/slices/cartSlice";


// const Products = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleAddToCart = (product) => {
//     console.log("Adding to cart:", product);
//     dispatch(addToCart(product));
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mt-5">
//       <h2>Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-4">
//             <div className="card">
//               <img src={product.image} className="card-img-top" alt={product.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">${product.price}</p>
//                 <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import Rating from "./Rating";
import { Row, Col, ButtonGroup, Button, Form, Card } from "react-bootstrap";
import "../styles/products.css"; // ✅ Add custom CSS for better UI

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!user) {
      alert("Please log in first!");
      return;
    }
    dispatch(addToCart({ product, userId: user.id }));
  };

  const filteredProducts = products
    .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const categories = ["all", ...new Set(products.map((product) => product.category))];

  return (
    <div className="container mt-5">
      {/* Category & Search Filters */}
      <Row className="mb-4 justify-content-center">
        <Col md={6} className="text-center">
          <ButtonGroup>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline-primary"}
                className="filter-btn"
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </Col>
      </Row>

      {/* Product List */}
      <h2 className="text-center mb-4">🛍️ Explore Our Products</h2>
      <Row className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="product-card shadow-sm">
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body className="text-center">
                <Card.Title className="product-title">{product.name}</Card.Title>
                <Card.Text className="product-price">${product.price}</Card.Text>
                <Rating initialRating={product.rating} />
                <Button className="btn-add-to-cart mt-2" onClick={() => handleAddToCart(product)}>
                  🛒 Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
