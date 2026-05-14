import { useState } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]); 

  const errorsFind = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Enter Name";
    if (!email) formErrors.email = "Enter Email";
    if (password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = errorsFind();
    
    if (Object.keys(formErrors).length === 0) {
      const newUser = { id: Date.now(), name, email, password };
      setUsers([...users, newUser])
      setname("");
      setemail("");
      setpassword("");
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div id="container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

          <button type="submit">Register</button>
        </form>
      </div>

      {/* 3. Only show this box if there are users */}
      {users.length > 0 && (
        <div id="box">
          <h2>Registration Successful</h2>
          <h3>Registered Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
