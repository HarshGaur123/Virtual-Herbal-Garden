

// import React, { useState } from 'react';
// import './Login.css'; 

// const Login = ({ setUser }) => { // Accept setUser as a prop
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await fetch('http://localhost:5000/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (data.valid === 1) {
//         setSuccess('Login successful!'); // Handle successful login
//         setUser({ name: data.user.name, email: data.user.email }); // Set user state
//         window.location.href = '/dashboard'; // Redirect to dashboard
//       } else {
//         setError(data.error);
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {success && <p style={{ color: 'green' }}>{success}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if (data.valid === 1) {
        setSuccess('Login successful!');
        setUser({ name: data.user.name, email: data.user.email });
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div aria-live="polite">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
