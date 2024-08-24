import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    gender: '',
    isMarried: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert(`🎉 Login Successful! Welcome, ${formData.name}!`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        style={{backgroundColor: 'lightgray', outline: 'none', color: 'black', fontWeight: 'bold'}}
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="Enter Your Name"
        className="input-field"
        required
      />
      <input
        style={{backgroundColor: 'lightgray', outline: 'none', color: 'black', fontWeight: 'bold'}}
        name="email"
        type="email"
        onChange={handleChange}
        value={formData.email}
        placeholder="Enter Your Email"
        className="input-field"
        required
      />
      <input
        style={{backgroundColor: 'lightgray', outline: 'none', color: 'black', fontWeight: 'bold'}}
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Your Password"
        className="input-field"
        required
      />
      <select
        style={{backgroundColor: 'lightgray', outline: 'none', color: 'black', fontWeight: 'bold'}}
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="input-field"
        required
      >
        <option value="">-- Select Your City --</option>
        <option value="Surat">Surat</option>
        <option value="Vadodara">Vadodara</option>
        <option value="Dwaraka">Dwaraka</option>
      </select>
      <div className="radio-group">
        <label style={{color: 'black', fontWeight: 'bold'}}>
          <input
            className='male-input'
            type="radio"
            value="male"
            onChange={handleChange}
            name="gender"
            checked={formData.gender === 'male'}
            required 
            style={{backgroundColor: 'red'}}
          /> Male
        </label>
        <label style={{color: 'black', fontWeight: 'bold'}}>
          <input
            type="radio"
            value="female"
            onChange={handleChange}
            name="gender"
            checked={formData.gender === 'female'}
            required
          /> Female
        </label>
      </div>
      <label className="checkbox-container" style={{color: 'black', fontWeight: 'bold'}}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={formData.isMarried}
          name="isMarried"
        /> Married
      </label>
      <input type="submit" className="submit-button" value="Submit" />
    </form>
  );
};

export default FormComponent;
