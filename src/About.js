import React from 'react'

function About() {
  return (
    <div>
        <div className="container head2" style={{fontFamily: "STIX Two Text, sans-serif"}}>
            <div className="row">
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/kite_pfp.jpeg')}  style={{width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>
                      <a href="https://www.linkedin.com/in/kite-ogawa-6480a1242/" target="_blank" style={{ textDecoration: 'none' }}>Kite Ogawa</a>
                    </h2>
                    <p style={{textAlign: 'center'}}>Chemical Engineering at UCLA</p>
                </div>
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/Raymond_profile_pic.jpg')}  style={{ width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>
                      <a href="https://www.linkedin.com/in/raymond-alvin-5891951b9/" target="_blank" style={{ textDecoration: 'none' }}>Raymond Alvin</a>
                    </h2>
                    <p style={{textAlign: 'center'}}>Electrical Engineering and Computer Sciences at UC Berkeley</p>
                </div>
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('/Users/raymondalvin/Desktop/react/collegecompetent/src/images/blank_pfp.webp')}  style={{ width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>Nathan Gibney</h2>
                    <p style={{textAlign: 'center'}}>Physics at UCLA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About