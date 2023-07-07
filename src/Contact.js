import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Contact({ title }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    }

  return (
    <div className='create' style={{fontFamily: "STIX Two Text, sans-serif"}}>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit} action="https://formsubmit.co/support@collegecompetent.com" method="POST">
            <label>Name: </label>
            <input 
                type='text'
                placeholder='John Doe'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email: </label>
            <input 
                type='email'
                placeholder='example@gmail.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Number: </label>
            <input 
                type='text'
                required
                placeholder='949-745-4382'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <label>Message: </label>
            <textarea required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact