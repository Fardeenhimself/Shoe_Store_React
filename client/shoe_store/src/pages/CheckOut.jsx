import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../Context/Store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckOut() {
  const { totalPrice, log, cart, setCart } = useContext(AuthContext);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate()


  

  const confirm = (e) => {
    e.preventDefault();

   fetch('http://127.0.0.1:5000/api/public/order', {

      method: "POST",
      body: JSON.stringify({
        name:log.name,
        email:log.email,
        address,
        phone,
        payment:0,
        cart
       }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
       if (json) {
        toast.success('Order Confirmed');
        setCart([]);
        setTimeout(()=>{
         navigate('/dashboard')
        },700)
        }
        else{
          toast.error('Server Error');
        }
      });
  };

  return (
    <>
      <div className='ml-5'>
        <Link to={'/cart'} className="btn mt-2 mb-5 border-black">Back</Link>
      </div>
      <ToastContainer position="top-right"
        autoClose={500}
        hideProgressBar={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:ml-10">
            <h1 className="text-5xl font-bold">{`Total: $${totalPrice}`}</h1>
            <p class="py-6">By clicking the Check Out button, you are redirected to the dashboard page. The charge also includes VAT and tax in the total bill.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Address" className="input input-bordered" value={log.name} required disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Phone" className="input input-bordered" value={log.email} required disabled />
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button onClick={confirm} className="btn btn-primary">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
