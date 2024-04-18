import React from "react"
import data from '../aboutData'
import './About.css'
// import DiskoSet from '../assets/images/ember colorized1.jpeg'


const AboutSection: React.FC = () => {
    return (
        <section id="aboutSection" className="about-section">
            <div className="about-title" id="aboutTitle">
                <h2>about me.</h2>
                {data.map (item => (
                    <div key={item.id} id={`diskoContainer${item.id}`}>
                        <img src={item.image} alt="DISKO NYC" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
      )
}
 
export default AboutSection