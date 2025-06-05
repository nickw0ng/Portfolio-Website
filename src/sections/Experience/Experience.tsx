import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experiences</h2>
        <div className="experience-grid">
          <div className="experience-column technical">
            <h3 className="experience-column-title technical">Technical Experience</h3>
            <div className="experience-item technical">
              <div className="experience-header">
                <h4 className="experience-company">State Street CRD</h4>
                <span className="experience-date">July 2025 - December 2025</span>
              </div>
              <p className="experience-role">Incoming Software Engineer Co-op | Burlington, MA</p>
              <ul className="experience-list">
                <li>Upcoming co-op position at State Street CRD</li>
              </ul>
            </div>
            <div className="experience-item technical">
              <div className="experience-header">
                <h4 className="experience-company">Northeastern Electric Racing</h4>
                <span className="experience-date">January 2024 - January 2025</span>
              </div>
              <p className="experience-role">Software Developer | Boston, MA</p>
              <ul className="experience-list">
                <li>Integrate and maintain a full-stack application for a nationally award-winning race car team, processing real-time car data to assist the engineering team in performance optimization</li>
                <li>Implement back-end services using TypeScript, Node.js, Docker, and PostgreSQL to handle data intake and storage, improving system scalability and performance</li>
                <li>Manage the team website's tracking project progress, deadlines, and finances for 300+ club members across 3 teams</li>
              </ul>
            </div>
            <div className="experience-item technical">
              <div className="experience-header">
                <h4 className="experience-company">J.P. Morgan</h4>
                <span className="experience-date">July - August 2024</span>
              </div>
              <p className="experience-role">Software Engineer | New York, NY</p>
              <ul className="experience-list">
                <li>Established a local development environment by downloading and configuring essential files, and dependencies</li>
                <li>Diagnosed and resolved repository issues to ensure the web application functioned correctly</li>
                <li>Utilized JPMorgan Chase's open-source library, Perspective, to develop a real-time data feed graph for enhanced trader monitoring and decision</li>
              </ul>
            </div>
          </div>

          <div className="experience-column non-technical">
            <h3 className="experience-column-title non-technical">Non-Technical Experience</h3>
            <div className="experience-item non-technical">
              <div className="experience-header">
                <h4 className="experience-company">Elegant II Valet</h4>
                <span className="experience-date">Summers 2023-2024</span>
              </div>
              <p className="experience-role">Assistant Manager | Long Beach, NY</p>
              <ul className="experience-list">
                <li>Efficiently managed parking and retrieval of over 100 vehicles per hour during high-traffic events, ensuring smooth operations and exceptional customer service</li>
                <li>Collaborated closely with event organizers, wedding planners, and restaurant staff to coordinate parking logistics, ensuring seamless operations and guest satisfaction</li>
              </ul>
            </div>
            <div className="experience-item non-technical">
              <div className="experience-header">
                <h4 className="experience-company">The Newman School</h4>
                <span className="experience-date">November 2022 - February 2023</span>
              </div>
              <p className="experience-role">Scorekeeper | Boston, MA</p>
              <ul className="experience-list">
                <li>Tracked and recorded player and team statistics for high school varsity basketball games with accuracy and consistency</li>
                <li>Operated and updated the scoreboard in real time during weekly varsity games</li>
                <li>Collaborated with coaches and officials to ensure correct game documentation and timing</li>
              </ul>
            </div>
            <div className="experience-item non-technical">
              <div className="experience-header">
                <h4 className="experience-company">Equal Care Pharmacy</h4>
                <span className="experience-date">June 2022 - August 2022</span>
              </div>
              <p className="experience-role">Pharmacy Intern | Flushing, NY</p>
              <ul className="experience-list">
                <li>Prepared and verified prescription medications under pharmacist supervision, ensuring accuracy and regulatory compliance</li>
                <li>Maintained and updated confidential patient records in pharmacy management software while adhering to HIPAA guidelines</li>
                <li>Assisted in educating patients on medication usage, side effects, and general health concerns, supporting pharmacist-led consultations</li>
              </ul>
            </div>
            <div className="experience-item non-technical">
              <div className="experience-header">
                <h4 className="experience-company">New York Titans Athletics</h4>
                <span className="experience-date">January 2020 - August 2022</span>
              </div>
              <p className="experience-role">Trainer & Mentor | Queens, NY</p>
              <ul className="experience-list">
                <li>Led dynamic basketball training sessions for youth aged 8–12, both in-person and virtually during the COVID-19 pandemic</li>
                <li>Designed and implemented creative, game-based drills to promote skill development and maintain engagement</li>
                <li>Fostered a supportive and inclusive environment, encouraging teamwork, discipline, and confidence in young athletes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 