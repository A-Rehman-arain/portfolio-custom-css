// import './Form.css'

// const Form = () => {
//   return (
//     <form className="form-container">
//       <h2 className="form-heading">
//         Let&apos;s Work Together
//       </h2>
//       <p className="form-description">
//         I am dedicated to creating innovative solutions that meet your unique
//         needs. By combining modern design principles with user-centered
//         approaches, I ensure that your project not only looks great but also
//         functions seamlessly. Let&apos;s collaborate to turn your ideas into
//         reality and create impactful digital experiences together.
//       </p>

//       <div className="form-inputs">
//         <input
//           type="text"
//           name="name"
//           required
//           className="form-input"
//           placeholder="Your Name"
//         />
//         <input
//           type="email"
//           name="email"
//           required
//           className="form-input"
//           placeholder="Your Email"
//         />
//         <input
//           type="text"
//           name="subject"
//           required
//           className="form-input"
//           placeholder="Subject"
//         />
//         <input
//           type="text"
//           name="company"
//           required
//           className="form-input"
//           placeholder="Your Company"
//         />
//       </div>
//       <textarea
//         name="message"
//         required
//         className="form-textarea"
//         placeholder="Your Message"
//       ></textarea>
//       <button type="submit" className="form-submit-button">
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default Form;









import React, { useState, FormEvent } from 'react';
import './Form.css';

const Contact = () => {
  const [result, setResult] = useState<string>("");
  
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);

    // Your Web3Forms Access Key
    formData.append("access_key", "a1bc779d-1581-4126-aa46-3ffe6413941a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully. You will receive an email shortly.");
      // Reset form fields
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error: " + data.message);
      console.log("Error", data);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="form-heading">Let&apos;s Work Together</h2>
        <p className="form-description">
          I am dedicated to creating innovative solutions that meet your unique
          needs. By combining modern design principles with user-centered
          approaches, I ensure that your project not only looks great but also
          functions seamlessly. Let&apos;s collaborate to turn your ideas into
          reality and create impactful digital experiences together.
        </p>

        <div className="form-inputs">
          <input
            type="text"
            name="name"
            required
            className="form-input"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="subject"
            required
            className="form-input"
            placeholder="Subject"
          />
          <input
            type="text"
            name="company"
            required
            className="form-input"
            placeholder="Your Company"
          />
        </div>
        <textarea
          name="message"
          required
          className="form-textarea"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="form-submit-button">
          Send Message
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
