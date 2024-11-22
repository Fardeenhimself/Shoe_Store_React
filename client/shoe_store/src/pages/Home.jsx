import Hero from "../components/Hero";
import Card from "../components/Card";
import Category from "../components/Category";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [datas, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(true);
  const { cartPage } = useContext(AuthContext);

  // Function to show a toast notification for successful product addition
  const notify = () => toast.success("Product Added Successfully");

  useEffect(() => {
    // Fetch product data when the component mounts
    fetch('http://127.0.0.1:5000/api/public/products/')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoad(false);
        setErr(false);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
        setErr(true);
        setLoad(false);
      });
  }, []);

  // Function to fetch products based on category
  const categorycally = (categoryId) => {
    fetch(`http://127.0.0.1:5000/api/public/products/category/id/${categoryId}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoad(false);
        setErr(false);
      })
      .catch(error => {
        console.error("Error fetching category products:", error);
        setErr(true);
        setLoad(false);
      });
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    cartPage(product);
    notify();
  };

  return (
    <>
      <Hero />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className="my-10">
        <h1 className="flex justify-center text-5xl font-bold p-2">
          Cushioning for Your Miles
        </h1>
        <p className="flex justify-center p-2">
          A lightweight Nike ZoomX midsole is combined with increased stack
          heights to help provide cushioning during extended stretches of
          running.
        </p>
      </div>
      <Category categorycally={categorycally} />
      <div className={load ? "block" : "hidden"}>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
      <div className={err ? "block" : "hidden"}>
        <h1>Server Error</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {datas.length ? (
          datas.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <h1>No Items Found</h1>
        )}
      </div>
    </>
  );
};

export default Home;
