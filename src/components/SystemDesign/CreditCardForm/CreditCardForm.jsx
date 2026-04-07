import React, { useState } from "react";

export default function CreditCardForm() {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const regex = {
    name: /^[a-zA-Z ]{2,50}$/,
    cardNumber: /^\d{16}$/,
    expiry: /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/,
    cvv: /^\d{3,4}$/,
  };

  const validate = () => {
    let newErrors = {};

    if (!regex.name.test(form.name)) {
      newErrors.name = "Enter a valid name";
    }

    if (!regex.cardNumber.test(form.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!regex.expiry.test(form.expiry)) {
      newErrors.expiry = "Format MM/YY or MM/YYYY";
    } else {
      const [month, year] = form.expiry.split("/");
      const fullYear = year.length === 2 ? `20${year}` : year;

      const expiryDate = new Date(fullYear, month);
      const today = new Date();

      if (expiryDate <= today) {
        newErrors.expiry = "Card has expired";
      }
    }

    if (!regex.cvv.test(form.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Payment Successful ✅");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Credit Card Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={form.cardNumber}
          onChange={handleChange}
          className="input"
        />
        {errors.cardNumber && (
          <p className="error">{errors.cardNumber}</p>
        )}

        <div className="row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY or MM/YYYY"
            value={form.expiry}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            className="input"
          />
        </div>

        {errors.expiry && <p className="error">{errors.expiry}</p>}
        {errors.cvv && <p className="error">{errors.cvv}</p>}

        <button type="submit" className="button">
          Pay Now
        </button>
      </form>
    </div>
  );
}