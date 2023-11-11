import React from 'react';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function Contact({ title }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o7y0gve', 'template_pj7qe8u', form.current, 'hpfQm0UHmZX1AGcbI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        history.push('/')
    };
    
  return (
    <div className='create' style={{fontFamily: "STIX Two Text, sans-serif"}}>
        <h2>{title}</h2>
        <form ref={form} onSubmit={sendEmail} method="POST">
            <label>Name: </label>
            <input 
                type='text'
                placeholder='John Doe'
                required
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email: </label>
            <input 
                type='email'
                placeholder='example@gmail.com'
                required
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Number: </label>
            <input 
                type='text'
                required
                name="user_number"
                placeholder='949-745-4382'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <label>Message: </label>
            <textarea required
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <h6 style={{marginTop: '25px', marginBottom: '25px'}}>You will recieve a confirmation email directly after submitting this form</h6>
            

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact