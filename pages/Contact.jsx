import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } else if (e.target.name === 'email' && !validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[e.target.name];
      setErrors(newErrors);
    }
  };

  return (
    <section>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur}></textarea>
          {errors.message && <p>{errors.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
