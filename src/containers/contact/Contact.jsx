import React, { useState, useEffect } from "react";
import "./contactStyle.css";
import Button from './../../components/Button';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Contact Us 🤳</h1>
    
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
    
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <label>Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
    
          <Button
            type="submit"
          >
            Submit
          </Button>
        </form>
      );
    };
    
    export default Contact;
