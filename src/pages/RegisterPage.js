import '../style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    location: '',
    category: 'Student',
    membership_id: '',
  });
  const [lastId, setLastId] = useState();

  useEffect(() => {
    const getId = async () => {
      setIsPending(true);
      await axios
        .get('http://app.value1.in/getMemId')
        .then((res) => {
          console.log(res);
          if (res.data.lastId) {
            setLastId(res.data.lastId);
            splitId(res.data.lastId);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPending(false);
        });
    };
    getId();
  }, []);
  // console.log(lastId)
  const splitId = (id) => {
    const ff = id.split('M');
    const n = ff[2];
    const prev = Number(n);
    console.log(prev);
    const p2 = prev + 1;
    const mm = `V1MEM${p2}`;
    setFormData({
      ...formData,
      membership_id: mm,
    });
  };

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsPending(true);

    if (formData.phone_number === '' || formData.phone_number === undefined || formData.phone_number === null) {
      alert('Enter Valid Phone Number!!!');
      setIsPending(false);
      return;
    }

    await axios
      .post('http://app.value1.in/registerUser', formData)
      .then((res) => {
        const data = res.data;
        console.log(res);
        if (res.data.added) {
          // alert(`user created, your membership id=${data.added.membership_id} kindly login`)
          navigate('/login');
        } else if (res.data.error === 'already exist') {
          alert('Phone number already exist kindly login');
        } else {
          alert(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <>
      <div className="container registerform">
        <div className="container-wrapper">
          <div className="logo-img">
            <img src="../logo1.png" alt="" className="logo" />
          </div>
          <h3 className="login-text">Register Form</h3>
          <form onSubmit={handleSubmit} method="post">
            <div className="item">
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
                className="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="item">
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                className="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="item">
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    phone_number: e.target.value,
                  });
                }}
                className="input"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="item">
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  });
                }}
                className="input"
                type="text"
                placeholder="Location"
              />{' '}
            </div>
            <div className="item">
              <select
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  });
                }}
                className="input"
              >
                <option disabled value="0">
                  Category
                </option>
                <option value="Student">Student</option>
                <option value="Other">Others</option>
                {/* <option value="3">Citroen</option>
                <option value="4">Others</option> */}
              </select>
            </div>
            <div className="item submit">
              <button disabled={isPending} type="submit">
                {isPending ? <CircularProgress color="inherit" size={20} /> : 'Submit'}
              </button>
            </div>
            {/* <span className="remember">
              {" "}
              <a href="#">Forgot Password?</a>{" "}
            </span> */}
          </form>
          <span className="ac">
            Already have an Account? <a href="/">Login</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
