import React from 'react'
import './About.css'
import Sidebar from './Sidebar';
import NavigationBar from './NavigationBar';

export const About = () => {
  return (
    <div >
      <NavigationBar />
      <div className="about-section">
        <h1 style={{marginTop:'-10px',textDecoration:'underline'}}>About us</h1>
        <p>Service Transaction Portal is launched in the year 2021. It is one of the biggest platforms that collaborate customers and service professionals. This is a small attempt from the engineers of BITS,PILANI to bring out an interface for people and also for a good experience for us</p>
      </div>
      <h1 style={{ textAlign: 'center' , color:'black', fontSize:'3rem', textDecoration: 'underline', marginTop:'10px'}}>OUR TEAM</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="container">
              <h2 className="title">Nikhil Kumar Ollala</h2>
              <p className="title">Product Owner</p>
              <p className="title">contact : 9014731761
                </p>
              <p className="title">f20190064@hyderabad.bits-pilani.ac.in</p>
              
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2 className="title">Rohith Kumar Gattu</h2>
              <p className="title">Scrum Master</p>
              <p className="title">contact : 9502986243</p>
              <p className="title">f20190049@hyderabad.bits-pilani.ac.in</p>
            
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2 className="title">Vamshi Duvva</h2>
              <p className="title">Developer</p>
              <p className="title">contact : 7729903048</p>
              <p className="title">f20190095@hyderabad.bits-pilani.ac.in</p>
          
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2 className="title">Nivesh Duppalapudi</h2>
              <p className="title">Developer</p>
              <p className="title">contact : 9121469767</p>
              <p className="title">f20190018@hyderabad.bits-pilani.ac.in</p>
        
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <h2 className="title">Srikar Sashank</h2>
              <p className="title">Developer</p>
              <p className="title">contact : 9493677181</p>
              <p className="title">f20190160@hyderabad.bits-pilani.ac.in</p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}