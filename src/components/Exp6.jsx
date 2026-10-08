import React, { useState } from 'react';

export default function Exp6() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const passwordValid = form.password.length >= 6;
  const valid = form.name.trim() && emailValid && passwordValid;

  const submit = (event) => {
    event.preventDefault();
    if (valid) setSubmitted(true);
  };

  return (
    <section className="lab-program">
      <h1>Program 6: React Form Validation</h1>
      <p>Collects name, email and password and performs client-side validation.</p>
      <form onSubmit={submit} className="react-form" noValidate>
        <label>Name<input name="name" value={form.name} onChange={update} placeholder="Enter your name" /></label>
        {!form.name.trim() && <small className="error">Name is required.</small>}
        <label>Email<input name="email" value={form.email} onChange={update} placeholder="name@example.com" /></label>
        {form.email && !emailValid && <small className="error">Enter a valid email address.</small>}
        <label>Password
          <div className="password-row">
            <input name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={update} placeholder="Minimum 6 characters" />
            <button type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>
        </label>
        {form.password && !passwordValid && <small className="error">Password must contain at least 6 characters.</small>}
        <button type="submit" disabled={!valid}>Submit</button>
      </form>
      {submitted && <div className="success">Form submitted successfully for {form.name}.</div>}
    </section>
  );
}