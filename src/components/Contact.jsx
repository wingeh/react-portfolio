// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from 'react'

import { checkEmail } from '../utils/helper';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const inputChangeHandler = (event) => {
      const inputName = event.target.name;
      const inputValue = event.target.value;
      if (inputName === 'name') {
          setName(inputValue);
      } else if (inputName === 'email') {
          setEmail(inputValue); 
      } else if (inputName === 'message') {
          setMessage(inputValue)
      }
  };
  const formSubmit = (event) => {
      event.preventDefault();
      if (!name || !email || !message ) {
          setError('Required field not completed')
          return
      }
      if (!checkEmail(email)) {
          setError('Please use a valid email');
          return 
      }
      setName('');
      setEmail('');
      setMessage('');
  }
    return (
      <content>
      <h1>Contact</h1>
      <form className="form">
                <input
                value={name}
                name="name"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Name"
                />
                <input
                value={email}
                name="email"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Email"
                />
                <textarea
                value={message}
                name="message"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Message"
                />
                <button type="button" onClick={formSubmit}>
                Submit
                </button>
            </form>
            {error && (
                <div>
                    <p>{error}</p>
                </div>
            )}
      </content>
    );
};

export default Contact;