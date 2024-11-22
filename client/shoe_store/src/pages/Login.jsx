import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { usr } = useContext(AuthContext);
  const navigate = useNavigate()
  const notify = (m) => {
    if(m){
      toast.success("Login Successfully")
    }
    else{
      toast.error('Login Failed')
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/api/public/login', {

      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json) {
          usr(json)
          notify(1);
          setTimeout(()=>{
            navigate('/')
          },700)
        }
        else{
          notify(0);
        }
      })
      .catch((e)=>{notify(0);})
  };

  const emailSet = (e) => {
    setEmail(e.target.value);
  };

  const passSet = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">By clicking on Log In, you also agreed with the terms and condition and accept the cookies.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={submitData}>
            <div className="form-control">
              <ToastContainer position="top-right"
                autoClose={500}
                hideProgressBar={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark" />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" onChange={emailSet} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" onChange={passSet} required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p>Don't have an account!</p>
              <Link to={'/signup'} className="btn mt-2 btn-primary">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
