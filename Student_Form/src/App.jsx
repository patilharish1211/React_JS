import React, { useState } from 'react';

// StudentForm Component
const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: '',
    isMarried: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log(formData);
      setIsLoading(false);
      // Clear form fields
      setFormData({
        fullName: '',
        email: '',
        password: '',
        gender: '',
        isMarried: false
      });
    }, 1000); // Simulate a delay
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '500px', marginTop: '150px'}}>
      <div>
        <label>
          Full Name:&nbsp;&nbsp;
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
      </div><br />
      <div>
        <label>
          Email:&nbsp;&nbsp;
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div><br />
      <div>
        <label>
          Password:&nbsp;&nbsp;
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
      </div><br />
      <div>
        
      </div>
      <div>
        <label>
          Gender:
          <label>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
            Male
          </label>&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
            Female
          </label>&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} />
            Other
          </label>
        </label>
      </div><br />
      <div>
        <label>
          Is Married:&nbsp;
          <input type="checkbox" name="isMarried" checked={formData.isMarried} onChange={handleChange} />
        </label>
      </div><br />
      <button type="submit" disabled={isLoading} style={{marginLeft: '100px'}}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <h1 style={{marginLeft: '490px', marginTop: '30px'}}>Student Registration Form</h1>
      <StudentForm />
    </div>
  );
};

export default App;
