import './App.css';

import React from 'react'
import Footer from './Footer';

function Home() {
  return (
    <div >
        <div >
            
        </div>
        <div  className="App" style={{paddingTop: '200px'}}>
            
            <div className='heading'>
                <h1>Your Dream School</h1>
                <h1>Guarantee</h1>
            </div>
        </div>

        <div className='head'>
            <h1>Our Services</h1>
        </div>

        <div className="container head1">
            <div className="row">
                <div className="col">
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/essaypic.jpg')}  style={{ width: '400px', height: '300px' }} />
                    <h2 style={{fontFamily: "STIX Two Text, sans-serif"}}>Essay Reading</h2>
                    <p>Refine your college essays with our expert reading service. Gain valuable feedback and guidance to maximize your acceptance chances. Let your unique voice shine through compelling essays that captivate admissions officers.</p>
                </div>
                <div className="col">
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/harvardpic.jpg')}  style={{ width: '400px', height: '300px' }} />
                    <h2 style={{fontFamily: "STIX Two Text, sans-serif"}}>The Complete Package</h2>
                    <p>Streamline your college journey with our expert optimization service. From applications to decisions, we guide you to success. Simplify the process, stand out, and make confident choices with our tailored support.</p>
                </div>
                <div className="col">
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/footballpic.jpg')}  style={{ width: '400px', height: '300px' }} />
                    <h2 style={{fontFamily: "STIX Two Text, sans-serif"}}>Activities Enhancer</h2>
                    <p>Maximize your college activities list. Stand out with our expert optimization service. Showcase your strengths, align your goals, and captivate admissions officers.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home