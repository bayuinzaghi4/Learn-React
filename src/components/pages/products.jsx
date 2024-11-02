import CardProduct from "../Fragments/CardProducts";
import { Fragment, useState, useEffect, useRef } from "react";
import Button from "../elements/Button";
import { getProducts } from "../../services/product.services";

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  },[]);

  useEffect(() => {
    getProducts((data) => {
    setProducts(data);
  });
   }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0 ) {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        return acc + product.price * item.qty; // Menghitung total harga dari setiap produk di keranjang
      }
      return acc;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    // Memeriksa apakah item sudah ada di keranjang
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };



  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3.1/5 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1.9/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                if (!product) return null;

                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 5)}...</td>
                    <td>Rp{" "}{product.price.toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                    <td>{item.qty}</td>
                    <td>Rp{" "}{(item.qty * product.price).toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}><b>Total Price</b></td>
                <td><b>
                Rp{" "}{totalPrice.toLocaleString("id-ID", 
                {styles:"currency", currency:"IDR"})}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;

