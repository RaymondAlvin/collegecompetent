import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Contact() {

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
    <div className='create'>
        <h2>Submit a new form</h2>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email: </label>
            <input 
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Number: </label>
            <input 
                type='text'
                required
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