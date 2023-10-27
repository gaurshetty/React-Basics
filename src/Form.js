import React, { useState } from 'react'

const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

//   const handleName = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     console.log(e.target.value);
//     setEmail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     console.log(e.target.value);
//     setPassword(e.target.value);
//   };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    // console.log(e.target.name);
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" name='name' value={formData.name} onChange={handleInput} id="name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="Email1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="Email1" name='email' value={formData.email} onChange={handleInput} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="Password1" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password1" name='password' value={formData.password} onChange={handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {formData.name}<br/>
      {formData.email}<br/>
      {formData.password}
    </div>
  )
}

export default Form
