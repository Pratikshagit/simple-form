// App.js
import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.referralJS.conversion = {
      debug: "true",
      parameters: {
          firstName: formData.name,
          //Referral First Name is HIGHLY RECOMMENDED.
          //Alternatively, replace "firstname:" with "fullname:" and we will parse the name.
          //Used for referral communications with  merge tag.
          email: formData.email, referralcode: "MKJK41"
          //Referral Email is HIGHLY RECOMMENDED.
          //Used to communicate with referrals through the Referral Rock platform.
          //This or "externalidentifier:" is used to positively ID referrals later and protect against fraud.
          //This or "email:" is used to positively ID referrals later and protect against fraud.
          //REQUIRED for referral rewards and program emails to referrals.
         
      }
  };

    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    // Reset the form
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="App">
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
