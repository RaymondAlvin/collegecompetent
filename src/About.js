import React from 'react'

function About() {
  return (
    <div>
        <div className="container head2" style={{fontFamily: "STIX Two Text, sans-serif"}}>
            <div className="row">
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('../src/images/kite_pfp.jpeg')}  style={{width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>
                      <a href="https://www.linkedin.com/in/kite-ogawa-6480a1242/" target="_blank" style={{ textDecoration: 'none' }}>Kite Ogawa</a>
                    </h2>
                    <p style={{textAlign: 'center'}}>Chemical Engineering at UCLA</p>
                    <p style={{textAlign: 'center'}}>Kite is an ambitious individual who is driven by a strong passion for STEM and entrepreneurial pursuits. Set to enroll at UCLA for a Bachelor's degree in Chemical Engineering, Kite's academic path reflects their dedication to the field. With over a year of experience as a Mathnasium tutor and private tutor, Kite has honed their teaching skills and nurtured a love for sharing knowledge. Their academic prowess earned them admission into esteemed institutions such as UCSD, NYU, UCSB, and UCI. Additionally, Kite's entrepreneurial spirit shines through their successful online business in music production, generating over $3,000 in revenue and amassing an impressive 10K+ views. Kite's multifaceted talents and determination make them a standout candidate ready to make a lasting impact in the academic and business spheres.
</p>
                </div>
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('../src/images/Raymond_profile_pic.jpg')}  style={{ width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>
                      <a href="https://www.linkedin.com/in/raymond-alvin-5891951b9/" target="_blank" style={{ textDecoration: 'none' }}>Raymond Alvin</a>
                    </h2>
                    <p style={{textAlign: 'center'}}>Electrical Engineering and Computer Sciences at UC Berkeley</p>
                    <p style={{textAlign: 'center'}}>Raymond is an exceptional individual whose academic achievements and professional experiences speak volumes about his dedication and passion for technology and engineering. With a full-ride scholarship to the prestigious Berkeley, he is set to pursue a Bachelor's degree in Electrical Engineering and Computer Sciences. Raymond's impressive resume includes a software engineering internship at NASA Jet Propulsion Laboratory, where he gained invaluable real-world experience in his field. His stellar academic record earned him admission into esteemed institutions such as Cornell, Georgia Tech, Johns Hopkins, UCSD, UIUC, USC, and Purdue. As an AWS Certified professional, Raymond possesses the expertise and skills necessary to excel in the dynamic field of computer sciences. With his unwavering commitment to excellence, Raymond is poised to make a significant impact in the world of technology and engineering.
</p>
                </div>
                <div className="col" style={{textAlign: 'center'}}>
                    <img src={require('../src/images/blank_pfp.webp')}  style={{ width: '350px', height: '400px', borderRadius: '30%'}} />
                    <h2>
                    <a href="https://www.linkedin.com/in/nathan-gibney-759572253/" target="_blank" style={{ textDecoration: 'none' }}>Nathan Gibney</a>
                    </h2>
                    <p style={{textAlign: 'center'}}>Biochemistry at UCLA</p>
                    <p style={{textAlign: 'center'}}>Nathan is an exceptional individual with a passion for science, community engagement, and academic excellence. As Nathan begins their journey at UCLA to pursue a Bachelor's degree in Biochemistry, their commitment to scientific exploration shines through. In addition to their academic pursuits, Nathan has made a significant impact as a Gymnasium and Parkour Coach, mentoring others in physical fitness and personal growth. Nathan's dedication to community service is evident through their role as a Community Leader for over four years at Team Michelle Non-Profit Organization. Their exceptional achievements and well-rounded profile led to admission offers from prestigious institutions such as Cal Berkeley, UCSD, UCSB, UCI, and Reed College, further highlighting Nathan's academic prowess and potential. Nathan's passion for science, leadership abilities, and commitment to community service make them an invaluable addition to any academic institution.
</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About