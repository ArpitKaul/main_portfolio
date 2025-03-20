import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useRef(); // Ref for the form

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    setError(""); 

    emailjs
      .sendForm("service_0u8tl2s", "template_7fw6ef4", form.current, "rbDLWID43k0z3qR_A")
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setName(""); 
          setEmail(""); 
          setMessage(""); 
        },
        (error) => {
          setError("Failed to send message. Try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex items-center justify-center min-h-screen mt-28">
      <div className="text-center w-full max-w-lg">
        <h2 className="text-4xl md:text-7xl text-white font-bold mt-3">Contact Me</h2>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form ref={form} className="mt-8 space-y-6" onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none shadow-sm bg-gray-800"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-100 rounded-lg bg-gray-800 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Leave Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full px-4 py-3 text-gray-100 rounded-lg bg-gray-800 shadow-sm"
            ></textarea>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
