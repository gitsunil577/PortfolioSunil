import React from 'react'

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className='text-3xl font-bold mb-5 my-16'>About</h1>
        <p>
            Hello, I'm Sunil, a passionate web devloper with a keen eye for MERN Stack. 
            With a background in IT, I strive to create impactful adipisicingvisually stunning software 
            solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className='text-blue-700 font-semibold text-x1'>Eduaction & Trainning</h1>
        <span>
            B.Tech,NIST University,2026,Computer Science & Engineering
        </span>
        <br />
        <br />
        <h1 className='text-blue-700 font-semibold text-x1'>Skill & Expertise</h1>
        <span>
            <ul>
                <li>Problem-Solving</li>
                <li>Team Collaboration</li>
                <li>Interview & Communication Skills</li>
            </ul>
        </span>
        <br />
        
        <h1 className='text-blue-700 font-semibold text-x1'>Achievements & Awards</h1>
        <span>
        Payment Integration: Successfully integrated Razorpay and Stripe for secure transactions.<br/>
        Chatbot Development: Built a customer support chatbot using Botpress for an electronics rental system.
        </span>
        <br />
        <br />
        <h1 className='text-blue-700 font-semibold text-x1'>Languages & Technology</h1>
        <span>
            C,Java,Python,NoSQL,Version Control(git & Github)
        </span>
        <br />
    </div>
  )
}

export default About;